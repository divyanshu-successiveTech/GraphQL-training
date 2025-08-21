import { messages } from "./dataSource.js";

export const messageMutationResolvers = {
  postMessage: (_, { content, author ,comments=[]}, { pubsub }) => {
    const newMessage = {
      id: String(messages.length + 1),
      content,
      author,
      createdAt: new Date().toISOString(),
      comments
    };
    messages.push(newMessage);

    pubsub.publish("MESSAGE_POSTED", { messagePosted: newMessage });  
    return newMessage;
  },
};
