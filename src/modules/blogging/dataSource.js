export const users = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com' }
];

export const posts = [
  {
    id: '101',
    title: 'GraphQL Basics',
    content: 'This post explains the basics of GraphQL.',
    authorId: '1'
  },
  {
    id: '102',
    title: 'Advanced GraphQL',
    content: "Let's dive deeper into GraphQL features.",
    authorId: '2'
  }
];

export const comments = [
  {
    id: '1001',
    content: 'Great intro!',
    authorId: '2',
    postId: '101'
  },
  {
    id: '1002',
    content: 'Looking forward to more.',
    authorId: '1',
    postId: '102'
  }
];
