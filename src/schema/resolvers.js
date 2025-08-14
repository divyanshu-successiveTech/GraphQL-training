import { messageModule } from "../modules/message/index.js";
import { blogQueryResolvers } from "../modules/blogging/query.js";

export const resolvers ={
    Query:{...messageModule.Query,
        ...blogQueryResolvers

    },
    Mutation:{...messageModule.Mutation,

    }
}