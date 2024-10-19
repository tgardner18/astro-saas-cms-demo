import { GraphQLClient } from "graphql-request";
import { print } from "graphql";


import { getSdk as getSdkWithClient, Requester } from "./__generated/sdk";

const requester: Requester<any> = async (doc: any, vars: any) => {
  const previewClient = new GraphQLClient(
    `https://cg.optimizely.com/content/v2`,
    {
      headers: {
        authorization:
          "Basic ***REMOVED***",
      },
    }
  );

  const client = new GraphQLClient(
    `https://cg.optimizely.com/content/v2?auth=***REMOVED***`
  );

  try {
    const res = await previewClient.rawRequest(print(doc), vars);
    return res?.data as any;
  } catch (err: any) {
    // if (NODE_ENV == "development") {
    //   console.error(
    //     "Error in GraphQL request:",
    //     "\n" + print(doc) + "\n",
    //     vars,
    //     "\n" + err.message
    //   );
    // } else {
    //   console.error(err);
    // }
      console.error(
          "Error in GraphQL request:",
          "\n" + print(doc) + "\n",
          vars,
          "\n" + err.message
      );
  }
};

export const optiSdk = getSdkWithClient(requester);
