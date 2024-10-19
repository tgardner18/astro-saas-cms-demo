import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `https://cg.optimizely.com/content/v2?auth=***REMOVED***`,
  generates: {
    "./src/services/graphql/__generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/services/graphql/__generated/graphql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/services/graphql/__generated/sdk.ts": {
      documents: [
        "./src/services/graphql/**/*.graphql",
        "./src/services/graphql/fragments/**/*.ts",
        "./src/services/graphql/queries/**/*.ts",
      ],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-generic-sdk",
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: "combine",
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        typesPrefix: "I",
      },
    },
  },
};

export default config;
