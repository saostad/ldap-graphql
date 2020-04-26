// HOW TO USE IT

import { initial } from "./index";

initial().then(({ url }) => {
  console.log(`Server started on ${url}`);
});
