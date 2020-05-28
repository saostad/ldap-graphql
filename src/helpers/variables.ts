import path from "path";

export const generatedSchemaPath = path.join(
  process.cwd(),
  "generated",
  "graphql",
);

/**@note I put this folder in root directory because it will be accessible same from 'dist' and 'src' directories */
export const customSchemaPath = path.join(
  __dirname,
  "..",
  "..",
  "lib",
  "custom-schema",
);

/** this is the directory that users can put their schema files to extend predefined schema */
export const userDefinedSchemaDefaultPath = path.join(
  process.cwd(),
  "customizations",
  "schema",
);

/** this is the directory that users can put their schema files to extend predefined resolvers */
export const userDefinedResolversDefaultPath = path.join(
  process.cwd(),
  "customizations",
  "resolvers",
);
