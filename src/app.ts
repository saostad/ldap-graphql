// HOW TO USE IT
import { IClientConfig } from "ldap-directory-manager";
import { createLogger, writeLog } from "fast-node-logger";
import { initial } from "./index";
import { config } from "dotenv";
config();

createLogger();

const connectionInfo: IClientConfig = {
  user: process.env.AD_USER ?? "",
  pass: process.env.AD_Pass ?? "",
  ldapServerUrl: process.env.AD_URI ?? "",
};

initial({ connectionInfo, generateSchema: true, port: 4000 })
  .then((server) => {
    writeLog(`Server started on ${server.url}`, {
      stdout: true,
      level: "info",
    });
  })
  .catch((err) => {
    writeLog(err, { level: "fatal", stdout: true });
  });
