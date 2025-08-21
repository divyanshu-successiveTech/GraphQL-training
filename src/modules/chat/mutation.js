import jwt from "jsonwebtoken";
import {users,messages} from "./dataSource.js"

const SECRET_KEY = "ASDFG";

export const AllMessages =[];

export const chatMutationResolver = {
    register: (_, { username, password }) => {
        const existing = users.find(u => u.username === username);
        if (existing) return ("Username already exists");

        const user = {
            id: `${users.length + 1}`,
            username,
            password, 
        };

        users.push(user);
        return user;
    },

    login: (_, { username, password },{pubsub}) => {
        const user = users.find(u => u.username === username);
        if (!user) return ("User not found");

        if (user.password !== password) {
            return ("Invalid password");
        }
        user.status = "Online";

        const token = jwt.sign(
            { id: user.id, username: user.username },
            SECRET_KEY
        );

        pubsub.publish("USER_ONLINE", { userStatus : user }); 

        return { token, user };
    },
    logout: async (_, __, context) => {
        const { user, pubsub , blackList,token } = context;

        if (!user) {
            throw new Error("No User found");
        }

        user.status = "Offline"

        pubsub.publish("USER_OFFLINE",{userStatus : user})

        blackList.add(token);

    
        return user;
    },

    sendMessage: (_, { content },context) => {
        const user = context.user;
        
        if (!user) throw new Error("Unauthorized");
        if (!content) throw new Error("Message content required");


        const message = {
            id: `${messages.length + 1}`,
            content,
            timestamp: new Date().toISOString(),
            sender: { id: user.id, username: user.username },
        };

        AllMessages.push(message)
        messages.push(message);
        return message;
    }

}