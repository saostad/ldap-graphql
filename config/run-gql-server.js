"use strict";

const index = require("../dist/index");

const connectionInfo = {
  user: "",
  pass: "",
  ldapServerUrl: "",
};

index.initial({ connectionInfo, generateSchema: false }).then((serverInfo) => {
  console.log(`Server started on ${serverInfo.url}`);
  setTimeout(() => {
    serverInfo.server.close((err) => {
      if (err) {
        console.error(err);
      }
      console.log(`Server closed.`);
    });
  }, 3000);
});
