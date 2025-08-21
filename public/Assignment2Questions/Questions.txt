1.Implement mutations to update user information and delete comments.

2.Include mutations to add new posts and comments to the system.

3.Implement a loading state on the server side to simulate delays in data retrieval.

4.Design a GraphQL schema that includes a "User" type with relevant fields (e.g., id, name, email).Develop a resolver for the user query that introduces a delay (e.g., 2 seconds) to simulate loading.Test the loading state by executing the query and measuring the time it takes to receive a response.

5.Create a custom error type in the GraphQL schema.Introduce an error condition in the resolver to simulate an error during data retrieval.Implement error handling in the query response.

6.Extend the GraphQL schema to support paginated queries for a list of posts.(refer to previous assignment). Implement a GraphQL query that retrieves a subset of products based on pagination parameters.Create a resolver to handle paginated queries.

7.Add sorting options to the paginated query (e.g., date).