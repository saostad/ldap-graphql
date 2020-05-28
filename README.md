# Graphql binding for LDAP server

### Goal

Battery included, Schema-aware binding between LDAP and Graphql

### How to use it

```ts
import { initial } from "ldap-graphql";
const connectionInfo = {
  baseDN: "DC=DOMAIN,DC=COM",
  user: "",
  pass: "",
  ldapServerUrl: "",
};

initial({ connectionInfo }).then(({ url }) => {
  console.log(`Server started on ${url}`);
});
```

### TODO:

- [x] extend pre-defined schema and resolvers via custom code
- [x] ability to re-generate schema and update pre-defined schemas
- [ ] option to change default schema generated output directory
- [ ] option to run server on different port
- [x] general graphql queries
  - [x] userGetAll
  - [x] userUpdate
  - [x] getByDn(dn: String!) // can fetch any object
  - [ ] getOUs(baseDn: String)
  - [ ] getDirectChildren(dn: String!) // one level search
