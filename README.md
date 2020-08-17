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

### Documentation

[Schema API Docs](https://saostad.github.io/ldap-graphql/schema)

[Module Code Docs](https://saostad.github.io/ldap-graphql)

### TODO:

- [x] extend pre-defined schema and resolvers via custom code
- [x] ability to re-generate schema and update pre-defined schemas
- [ ] option to change default schema generated output directory
- [ ] option to run server on different port
- [x] general graphql queries
  - [x] userGetAll
  - [x] userUpdate
  - [x] getByDn(dn: String!) // can fetch any entry
  - [ ] adEntryCountryUpdate(input: AdEntryCountryUpdateInput!): GeneralEntry
    - [x] update 3 fields(c, co, countryCode) at same time
    - [ ] add enum for acceptable values in adEntryCountryUpdate
  - [ ] getOUs(baseDn: String)
  - [ ] getDirectChildren(dn: String!) // one level search
  - [x] entryUpdate
  - [x] entryDelete
  - [x] entryAdd
