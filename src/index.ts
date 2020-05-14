import { ApolloServer } from "apollo-server";
import { IClientConfig } from "ldap-directory-manager";
import {
  getSchemaAttributes,
  getSchemaClasses,
  generateGraphqlTypeFiles,
  getSchemaNamingContext,
} from "ldap-schema-ts-generator";

import { promises } from "fs";

import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";
import path from "path";

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

const schemaPath = path.join(process.cwd(), "generated", "graphql");

/** initial an instance of Apollo-Server */
export async function initial(configs: InitialFnInput) {
  let generateSchema = true;
  if (typeof configs.generateSchema === "boolean") {
    generateSchema = configs.generateSchema;
  }

  /** @step generate graphql schema from LDAP schema */
  if (generateSchema) {
    const schemaDn = await getSchemaNamingContext({
      options: configs.connectionInfo,
    });

    const objectAttributes = await getSchemaAttributes({
      schemaDn,
      options: configs.connectionInfo,
    });

    const objectClasses = await getSchemaClasses({
      schemaDn,
      options: configs.connectionInfo,
    });

    await generateGraphqlTypeFiles({
      objectAttributes,
      objectClasses,
      options: {
        generateEnumTypeMaps: false,
        generateClientSideDocuments: false,
        generateResolvers: true,
        justThisClasses: ["user", "group", "computer"],
      },
    });
  }

  try {
    await promises.readdir(schemaPath);
  } catch (error) {
    throw `schema not exist in path ${schemaPath}`;
  }

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: { connectionInfo: configs.connectionInfo },
    playground: true,
    introspection: true,
  });
  return server.listen();
}
