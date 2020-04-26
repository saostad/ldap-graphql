import { ApolloServer } from "apollo-server";

import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

/** initial an instance of Apollo-Server */
export async function initial() {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    playground: true,
    introspection: true,
  });
  return server.listen();
}
