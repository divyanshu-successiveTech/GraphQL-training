import { messageModule } from "../modules/message/index.js";
import { blogFieldResolvers } from "../modules/blogging/blogFieldResolvers.js";
import { bloggingModule } from "../modules/blogging/index.js";
import { UserModule } from "../modules/user/index.js";

export const resolvers ={
    Query:{...messageModule.Query,
        ...bloggingModule.Query,
        ...UserModule.Query

    },
    Mutation:{...messageModule.Mutation,
        ...bloggingModule.Mutation,
        ...UserModule.Mutation

    },
    ...blogFieldResolvers,

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
  }
}