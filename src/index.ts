import { ApolloServer } from "apollo-server";
import { DataSources } from "apollo-server-core/src/graphqlOptions";
import UserDataSource from "./users/dataSource";
import usersResolver from "./users/resolvers";

import typeDefs from "./schema";
import { ApplicationContext } from "./interfaces";

const dataSources = (): DataSources<ApplicationContext> => {
  return {
    userDataSource: new UserDataSource<ApplicationContext>(),
  };
};

const resolvers = {
  Query: {
    users: usersResolver,
  },
};

const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 server ready at ${url}`);
});
