import { blogMutationResolver } from "./mutation.js";
import { blogQueryResolvers } from "./query.js";
import { blogSubscriptionResolver } from "./subscription.js";


export const bloggingModule = {
    Query:blogQueryResolvers,
    Mutation:blogMutationResolver,
    Subscription:blogSubscriptionResolver
}