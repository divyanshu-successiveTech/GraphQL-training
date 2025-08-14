import { users,posts,comments } from "./dataSource.js";

export const blogQueryResolvers = {
    

    users: ()=> users,
    user:(_,{id})=>users.find(user => user.id === id),

    posts: ()=>posts,
    post:(_,{id})=> posts.find(post => post.id === id),

    comments: ()=>comments,
    comment:(_,{id})=>comments.find(comment => comment.id===id)
  
};
