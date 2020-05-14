// HOW TO USE IT
import { IClientConfig } from "ldap-directory-manager";
import { initial } from "./index";
import { config } from "dotenv";
config();

const configs: IClientConfig = {
  baseDN: "DC=ki,DC=local",
  user: process.env.AD_USER ?? "",
  pass: process.env.AD_Pass ?? "",
  ldapServerUrl: process.env.AD_URI ?? "",
};

initial({ connectionInfo: configs }).then(({ url }) => {
  console.log(`Server started on ${url}`);
});
