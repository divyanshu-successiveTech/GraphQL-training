import { messageModule } from "../modules/message/index.js";
import { blogFieldResolvers } from "../modules/blogging/blogFieldResolvers.js";
import { bloggingModule } from "../modules/blogging/index.js";
import { UserModule } from "../modules/user/index.js";
import { chatModule } from "../modules/chat/index.js";
import { nestedChatResolver } from "../modules/chat/nestedResolver.js";

export const resolvers ={
    Query:{...messageModule.Query,
        ...bloggingModule.Query,
        ...UserModule.Query,
        ...chatModule.Query

    },
    Mutation:{...messageModule.Mutation,
        ...bloggingModule.Mutation,
        ...UserModule.Mutation,
        ...chatModule.Mutation

    },

    Subscription:{
      ...messageModule.Subscription,
      ...bloggingModule.Subscription,
      ...chatModule.Subscription

    },
    ...blogFieldResolvers,
    ...nestedChatResolver,

    UserResult: {
    __resolveType(obj) {
      if (obj.code) {
        return "Error";
      }
      if (obj.email) {
        return "User";
      }

      return null
      }
    },
  
}