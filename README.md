# Graphql binding for LDAP server

### Goal

create a binding between ldap and graphql

### How to use it

create a `.env` file in root of your project with bellow variables:

```
AD_USER=YOUR_USERNAME_HERE
AD_PASS=YOUR_PASSWORD_HERE
AD_URI=ldap://DOMAIN.COM:RootDFS
```

```ts
import { initial } from "ldap-graphql";

initial().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
```

### Note

this is not meant to be used in edge

### TODO:

- [ ] provide a way to extend pre-defined schema and resolvers via custom code
- [ ] add ability to re-generate schema and update pre-defined schemas
