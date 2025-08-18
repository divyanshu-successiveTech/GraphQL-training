import { UserMutaionResolver } from "./mutation.js";
import { UserQueryResolver } from "./query.js";


export const UserModule={

    Query:UserQueryResolver,
    Mutation:UserMutaionResolver

}