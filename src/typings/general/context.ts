import { IClientConfig } from "ldap-directory-manager";

export type GraphqlContext = {
  connectionInfo: IClientConfig;
};
