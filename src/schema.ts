import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    users: [User]
  }
  
  type User {
    id: ID!
    email: String!
  }
`;