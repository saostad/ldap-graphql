// HOW TO USE IT
import { IClientConfig } from "ldap-directory-manager";
import { createLogger } from "fast-node-logger";
import { initial } from "./index";
import { config } from "dotenv";
config();

createLogger({ prettyPrint: { colorize: true } });

const connectionInfo: IClientConfig = {
  user: process.env.AD_USER ?? "",
  pass: process.env.AD_Pass ?? "",
  ldapServerUrl: process.env.AD_URI ?? "",
};

initial({ connectionInfo, generateSchema: true, port: 3999 }).then((server) => {
  console.log(`Server started on ${server.url}`);
});
