import { ApolloServer, ServerInfo } from "apollo-server";

import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const server = new ApolloServer({
  resolvers,
  typeDefs,
  playground: true,
  introspection: false,
});

// The `listen` method launches a web server.
server.listen().then(({ url }: ServerInfo) => {
  console.log(`🚀  Server ready at ${url}`);
});
