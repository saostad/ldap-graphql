import { ApolloServer } from "apollo-server";
import { IClientConfig } from "ldap-directory-manager";
import {
  getSchemaAttributes,
  getSchemaClasses,
  generateGraphqlTypeFiles,
  getSchemaNamingContext,
} from "ldap-schema-ts-generator";

import { promises } from "fs";

import { getTypes } from "./graphql/typeDefs";
import { getResolvers } from "./graphql/resolvers";
import { generatedSchemaPath } from "./helpers/variables";
type InitialFnInput = {
  connectionInfo: IClientConfig;
  /** default true
   * @note use cases:
   * - first time to run the project
   * - every time we change the LDAP schema and want to reflect changes to graphql schema
   */
  generateSchema?: boolean;
  customResolversPath?: string;
  customSchemaPath?: string;
};

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

  /**@step make sure schema exist before starting the server */
  try {
    await promises.readdir(generatedSchemaPath);
  } catch (error) {
    throw `schema does not exist in path ${generatedSchemaPath}`;
  }

  const typeDefs = await getTypes({
    customSchemaPath: configs?.customSchemaPath,
  });
  const resolvers = await getResolvers({
    customResolversPath: configs?.customResolversPath,
  });

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: { connectionInfo: configs.connectionInfo },
    playground: true,
    introspection: true,
  });
  return server.listen();
}
