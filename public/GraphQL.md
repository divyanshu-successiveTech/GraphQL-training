Question1

##  Sample Dataset: Blogging Platform
Entities:
 **Users**: `id`, `name`, `email`
- **Posts**: `id`, `title`, `content`, `authorId`
- **Comments**: `id`, `text`, `postId`, `authorId`



##  Core Differences

 Feature             RESTful API                             GraphQL API                             

 **Endpoint Style**  Multiple endpoints (e.g., `/posts`)     Single endpoint (`/graphql`)             
 **Data Fetching**   Fixed per endpoint                      Flexible, based on client queries        
 **Over-fetching**   Common                                  Avoided                                  
 **Under-fetching**  Common (multiple calls needed)          Avoided (all in one query)               
 **Versioning**      Uses URL versioning                     Schema evolves without versioning        
 **Caching**         Simple with HTTP caching                Requires custom logic                    


##  Real-World Example: Get a Post with Author and Comments

### REST (Multiple Calls)
http
GET /posts/1
GET /users/2
GET /posts/1/comments

### GraphQL Query(Single Query)

{
  post(id: 1) {
    title
    author { name }
    comments { text }
  }
}

Question2

#  GraphQL & Data Efficiency

##  Common Issues in APIs

1. **Over-fetching** – Retrieving more data than needed.
2. **Under-fetching** – Making multiple requests to get complete data.


##  How GraphQL Solves This

###  Exact Data Queries

GraphQL lets clients request only the fields they need.

graphql
{
  post(id: 1) {
    title
    author { name }
    comments { text }
  }
}
