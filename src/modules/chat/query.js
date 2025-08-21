import { AllMessages } from "./mutation.js"

export const chatQueryResolver ={
    chatUsers: async () => {
      return await ChatUser.find(); 
    },

    chatMessages: async () => {
      return await ChatMessage.find().populate('sender'); 
    },
    AllMessages: (_, __, { user }) => {
  if (!user) {
    throw new Error("Authentication required");
  }

  if (user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  return AllMessages;
}


}