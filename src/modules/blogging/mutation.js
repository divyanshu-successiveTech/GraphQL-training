
import { users, comments, posts } from './dataSource.js'; 


export const blogMutationResolver = {
  updateUser: (_, { id, name, email }) => {
    const user = users.find((u) => u.id === id);
    if (!user) {
      throw new Error('User not found');
    }

    if (name ) user.name = name;
    if (email ) user.email = email;

    return user;
  },

  deleteComment: (_, { id }) => {
    const index = comments.findIndex((comment) => comment.id === id);
    if (index === -1) {
      return ("No comment found for given id")
    }

    const removedComment = comments.splice(index, 1);
    const deletedComment = removedComment[0];

    return deletedComment;

  },

  addPost: (_, { title, content, authorId }) => {
    const authorExists = users.some((user) => user.id === authorId);

    if (!authorExists) return ("Author not found");

    const newPost = {
      id: (posts.length + 101).toString(),
      title,
      content,
      authorId,
    };

    posts.push(newPost);
    return newPost;
  },

  addComment: (_, { content, authorId, postId },{pubsub}) => {
    const authorExists = users.some((user) => user.id === authorId);
    const postExists = posts.some((post) => post.id === postId);
    if (!authorExists) return ("Author not found")
    if (!postExists) return ("Post not found")

    const newComment = {
      id: (comments.length + 1001).toString(),
      content,
      authorId,
      postId,
    };

    comments.push(newComment);

    pubsub.publish("NEW_COMMENT_CREATED", { addComment: newComment }); 

    return newComment;
  },

}