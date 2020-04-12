import { ApolloServer } from "apollo-server";
import { UserDataSource } from "./users/dataSource";
import * as userResolvers from "./users/resolvers";

import { typeDefs } from "./schema";

const dataSources = () => {
  return {
    userDataSource: new UserDataSource(),
  }
};

const resolvers = {
  Query: {
    users: userResolvers.users,
  }
};

const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 server ready at ${url}`);
});