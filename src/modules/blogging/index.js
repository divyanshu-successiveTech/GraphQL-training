import { blogMutationResolver } from "./mutation";
import { blogQueryResolvers } from "./query";


export const bloggingModule = {
    Query:blogQueryResolvers,
    Mutation:blogMutationResolver
}