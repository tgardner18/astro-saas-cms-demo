import { GraphQLClient } from "graphql-request";
import { print } from "graphql";

import { getSdk as getSdkWithClient, Requester } from "./__generated/sdk";

const requesterDraft: Requester<any> = async (doc: any, vars: any) => {
  const token = btoa(
    `${import.meta.env.OPTIMIZELY_GRAPH_APP_KEY}:${import.meta.env.OPTIMIZELY_GRAPH_APP_SECRET}`,
  );
  const previewClient = new GraphQLClient(
    `${import.meta.env.OPTIMIZELY_GRAPH_GATEWAY}/content/v2`,
    {
      headers: {
        authorization: `Basic ${token}`,
      },
    },
  );
  try {
    const res = await previewClient.rawRequest(print(doc), vars);
    return res?.data as any;
  } catch (err: any) {
    if (import.meta.env.DEV) {
      console.error(
        "Error in GraphQL request:",
        "\n" + print(doc) + "\n",
        vars,
        "\n" + err.message,
      );
    } else {
      console.error(err);
    }
    console.error(
      "Error in GraphQL request:",
      "\n" + print(doc) + "\n",
      vars,
      "\n" + err.message,
    );
  }
};

const requesterPublished: Requester<any> = async (doc: any, vars: any) => {
  const client = new GraphQLClient(
    `${import.meta.env.OPTIMIZELY_GRAPH_GATEWAY}/content/v2?auth=${import.meta.env.OPTIMIZELY_GRAPH_SINGLE_KEY}`,
  );

  try {
    const res = await client.rawRequest(print(doc), vars);
    return res?.data as any;
  } catch (err: any) {
    if (import.meta.env.DEV) {
      console.error(
        "Error in GraphQL request:",
        "\n" + print(doc) + "\n",
        vars,
        "\n" + err.message,
      );
    } else {
      console.error(err);
    }
    console.error(
      "Error in GraphQL request:",
      "\n" + print(doc) + "\n",
      vars,
      "\n" + err.message,
    );
  }
};

export const optiDraftSdk = getSdkWithClient(requesterDraft);
export const optiPublishedSdk = getSdkWithClient(requesterPublished);

export const getSdk = (isDraft: boolean) =>
  isDraft ? optiDraftSdk : optiPublishedSdk;
