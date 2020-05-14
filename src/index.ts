import { ApolloServer } from "apollo-server";
import { IClientConfig } from "ldap-directory-manager";

import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

type InitialFnInput = {
  connectionInfo: IClientConfig;
  /** default true
   * @note use cases:
   * - first time to run the project
   * - generate new entity from LDAP schema
   * - every time we change the LDAP schema and want to reflect changes to graphql schema
   */
  generateSchema?: boolean;
};

/** initial an instance of Apollo-Server */
export async function initial({ connectionInfo }: InitialFnInput) {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: { connectionInfo },
    playground: true,
    introspection: true,
  });
  return server.listen();
}
