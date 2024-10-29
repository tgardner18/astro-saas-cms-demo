import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnv } from "vite";

const { OPTIMIZELY_GRAPH_SINGLE_KEY } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

const config: CodegenConfig = {
  overwrite: true,
  schema: `https://cg.optimizely.com/content/v2?auth=${OPTIMIZELY_GRAPH_SINGLE_KEY}`,
  generates: {
    "./src/services/graphql/__generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./src/services/graphql/__generated/graphql.schema.graphql": {
      plugins: ["schema-ast"],
    },
    "./src/services/graphql/__generated/sdk.ts": {
      documents: [
        //"./src/services/graphql/**/*.graphql",
        "./src/services/graphql/fragments/**/*.graphql",
        "./src/services/graphql/queries/**/*.graphql",
        //"./src/components/**/*.astro",
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
        //typesPrefix: "I",
      },
    },
  },
};

export default config;
