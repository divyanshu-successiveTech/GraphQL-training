// import { ApolloServer } from "@apollo/server";
// import express from "express";
// import { typeDefs } from "../schema/typeDefs.js";
// import { resolvers } from "../schema/resolvers.js";
// import jwt from "jsonwebtoken";

// const SECRET_KEY = "ASDFG";

// export async function createApolloServer() {
//   const app = express();

//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: ({ req }) => {
//       const auth = req.headers.authorization || '';
//       if (!auth.startsWith('Bearer ')) {
//         return {};
//       }

//       const token = auth.split(' ')[1];
//       try {
//         const user = jwt.verify(token, SECRET_KEY);
//         console.log("User in context:", user);
//         return { user };
//       } catch (err) {
//         console.log("JWT verify error:", err.message);
//         return {};
//       }
//     }
//   });

//   await server.start();

//   server.applyMiddleware({ app, path: "/graphql" });

//   return app;
// }
