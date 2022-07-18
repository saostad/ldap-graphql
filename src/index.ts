import { ApolloServer } from "apollo-server";
import { IClientConfig, Client } from "ldap-directory-manager";
import {
  getSchemaAttributes,
  getSchemaClasses,
  generateGraphqlTypeFiles,
  getCountryIsoCodes,
  generateCountryIsoCodesFile,
} from "ldap-schema-ts-generator";

import { promises } from "fs";

import { getTypes } from "./graphql/typeDefs";
import { getResolvers } from "./graphql/resolvers";
import { generatedSchemaPath } from "./helpers/variables";
import { Logger, writeLog } from "fast-node-logger";

export type InitialFnInput = {
  connectionInfo: IClientConfig;
  /** default true
   * @note use cases:
   * - first time to run the project.
   * - every time we change the LDAP schema and want to reflect changes to graphql schema.
   */
  generateSchema?: boolean;
  generateSchemaOptions?: {
    /** option to select which objectClasses to generate. default ["user", "group", "computer"]*/
    justThisClasses: string[];
  };
  /** user defined graphql resolvers files path to extends pre-defined resolvers */
  customResolversPath?: string;
  /** user defined graphql schema files path to extends pre-defined schema */
  customSchemaPath?: string;
  /** generate country iso-3166 codes. default false */
  generateCountryIsoCodes?: boolean;
  logger?: Logger;
  /** default 4000 */
  port?: number;
};

/** initial an instance of Apollo-Server */
export async function initial(configs: InitialFnInput) {
  try {
    let generateSchema = true;
    if (typeof configs.generateSchema === "boolean") {
      generateSchema = configs.generateSchema;
    }

    let generateCountryIsoCodes = false;
    if (typeof configs.generateCountryIsoCodes === "boolean") {
      generateCountryIsoCodes = configs.generateCountryIsoCodes;
    }

    let justThisClasses = ["user", "group", "computer"];
    if (configs.generateSchemaOptions) {
      justThisClasses = configs.generateSchemaOptions.justThisClasses;
    }

    let port = 4000;
    if (configs.port) {
      port = configs.port;
    }

    /** @step generate graphql schema from LDAP schema */
    if (generateSchema) {
      const client = new Client(configs.connectionInfo);

      const objectAttributes = await getSchemaAttributes({
        client,
        options: { logger: configs.logger },
      }).catch((error: Error) => {
        writeLog(error, { level: "error", stdout: true });
        throw error;
      });

      const objectClasses = await getSchemaClasses({
        client,
        options: { logger: configs.logger },
      }).catch((error: Error) => {
        writeLog(error, { level: "error", stdout: true });
        throw error;
      });

      await client.unbind().catch((error: Error) => {
        writeLog(error, { level: "error", stdout: true });
        throw error;
      });

      await generateGraphqlTypeFiles({
        objectAttributes,
        objectClasses,
        options: {
          generateEnumTypeMaps: false,
          generateClientSideDocuments: false,
          generateResolvers: true,
          justThisClasses,
        },
      }).catch((error: Error) => {
        writeLog(error, { level: "error", stdout: true });
        throw error;
      });
    }

    if (generateCountryIsoCodes) {
      const countryCodes = await getCountryIsoCodes({ useCache: true }).catch(
        (error: Error) => {
          writeLog(error, { level: "error", stdout: true });
          throw error;
        },
      );
      await generateCountryIsoCodesFile({ countryCodes }).catch(
        (error: Error) => {
          writeLog(error, { level: "error", stdout: true });
          throw error;
        },
      );
    }

    /**@step make sure schema exist before starting the server */

    await promises.readdir(generatedSchemaPath).catch((error: Error) => {
      writeLog(error, { level: "error", stdout: true });
      throw error;
    });

    const typeDefs = await getTypes({
      customSchemaPath: configs?.customSchemaPath,
    }).catch((error: Error) => {
      writeLog(error, { level: "error", stdout: true });
      throw error;
    });
    const resolvers = await getResolvers({
      customResolversPath: configs?.customResolversPath,
    }).catch((error: Error) => {
      writeLog(error, { level: "error", stdout: true });
      throw error;
    });

    const server = new ApolloServer({
      resolvers,
      typeDefs,
      context: { connectionInfo: configs.connectionInfo },
      introspection: true,
    });
    return server.listen({ port });
  } catch (error) {
    writeLog(error, { level: "fatal", stdout: true });
    throw error;
  }
}
