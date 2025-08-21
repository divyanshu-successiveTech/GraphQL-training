import { users } from "./dataSource.js";

export const nestedChatResolver ={
    ChatMessage: {
    sender: (context) => {
      return users.find(user => user.id === context.sender.id) || null;
    },
  }

}

