import jwt from "jsonwebtoken";
import { ChatUser } from "./models/ChatUser.js";
import { ChatMessage } from "./models/ChatMessage.js";

const SECRET_KEY = "ASDFG";

export const AllMessages =[];

export const chatMutationResolver = {
    register: async (_, { username, password ,role}) => {
        const existingUser = await ChatUser.findOne({ username });
        if (existingUser) {
            throw new Error("Username already exists");
        }

        const newUser = new ChatUser({
            username,
            password, 
            status: "Offline",
            role
        });

        await newUser.save();

        return newUser;
    },


    login: async (_, { username, password }, { pubsub }) => {
        const user = await ChatUser.findOne({ username });
        if (!user) {
            throw new Error("User not found");
        }

        if (user.password !== password) {
            throw new Error("Invalid password");
        }

        user.status = "Online";
        await user.save();

        const token = jwt.sign(
            { id: user._id, username: user.username },
            SECRET_KEY
        );

        pubsub.publish("USER_ONLINE", { userStatus: user });

        return { token, user };
    },

    logout: async (_, __, context) => {
        const { user, pubsub, blackList, token } = context;

        if (!user) {
            throw new Error("No User found");
        }
        const reqUser = await ChatUser.findById(user.id);
        if (!reqUser) {
            throw new Error("User not found in database");
        }

        reqUser.status = "Offline";
        await reqUser.save();

        pubsub.publish("USER_OFFLINE", { userStatus: reqUser });

        blackList.add(token);

        return reqUser;
    },


    
    sendMessage: async (_, { content }, context) => {
        const user = context.user;

        if (!user) throw new Error("Unauthorized");
        if (!content) throw new Error("Message content required");

        const message = new ChatMessage({
            content,
            timestamp: new Date().toISOString(),
            sender: user._id, 
        });
        console.log('user._id:', user._id);


        await message.save();
        const msg = await ChatMessage.findById(message._id).populate('sender');
        await message.populate("sender");
        AllMessages.push(message);

        return msg;
    }

}