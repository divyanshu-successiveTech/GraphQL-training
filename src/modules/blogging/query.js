import { users,posts,comments } from "./dataSource.js";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const blogQueryResolvers = {
    

   users: async () => {
    await delay(1000); 
    return users;
   },


  user: async (_, { id }) => {
    await delay(1000);
    return users.find((user) => user.id === id);
  },


  posts: async () => {
    await delay(1000);
    return posts;
  },


  post: async (_, { id }) => {
    await delay(1000);
    return posts.find((post) => post.id === id);
  },


  comments: async () => {
    await delay(1000);
    return comments;
  },

  
  comment: async (_, { id }) => {
    await delay(1000);
    return comments.find((comment) => comment.id === id);
  },


  paginatedPosts: (_, { page, pageSize ,sortBy, sortOrder  }) => {  

    const sortedPosts = posts.slice(); 
    const isAscending = sortOrder === "ASC";

    if(sortBy === "TITLE"){
      sortedPosts.sort((a,b)=>{
        const firstTitle = a.title.toLowerCase();
        const secondTitle = b.title.toLowerCase();

        return isAscending ? firstTitle.localeCompare(secondTitle) : secondTitle.localeCompare(firstTitle)
      })
    }else{
      sortedPosts.sort((a,b)=>{
        const firstDate = new Date(a.createdAt)
        const secondDate = new Date(b.createdAt)

        isAscending ? firstDate-secondDate:secondDate-firstDate
        
      })
    }
    

    const start = (page -1)* pageSize
    const end = start + pageSize
    const items = sortedPosts.slice(start,end)

    const totalPostCount = sortedPosts.length

    return {items , totalPostCount}

  }
  
};
