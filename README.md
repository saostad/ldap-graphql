# Graphql binding for LDAP server

### Goal

Battery included binding between ldap and graphql

### How to use it

```ts
import { initial } from "ldap-graphql";
const configs = {
  baseDN: "DC=DOMAIN,DC=COM",
  user: "",
  pass: "",
  ldapServerUrl: "",
};

initial({ connectionInfo: configs }).then(({ url }) => {
  console.log(`Server started on ${url}`);
});
```

### Note

this is not meant to be used in edge

### TODO:

- [ ] provide a way to extend pre-defined schema and resolvers via custom code
- [ ] add ability to re-generate schema and update pre-defined schemas
