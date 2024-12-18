import { GraphQLClient } from "graphql-request";
import { print } from "graphql";

import { getSdk as getSdkWithClient, Requester } from "./__generated/sdk";

import {OPTIMIZELY_GRAPH_GATEWAY, OPTIMIZELY_GRAPH_APP_KEY, OPTIMIZELY_GRAPH_SINGLE_KEY} from 'astro:env/client'
import {OPTIMIZELY_GRAPH_SECRET} from 'astro:env/server'

const requesterDraft: Requester<any> = async (doc: any, vars: any) => {
  const token = btoa(
    `${OPTIMIZELY_GRAPH_APP_KEY}:${OPTIMIZELY_GRAPH_SECRET}`,
  );
  const previewClient = new GraphQLClient(
    `${OPTIMIZELY_GRAPH_GATEWAY}/content/v2`,
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
    `${OPTIMIZELY_GRAPH_GATEWAY}/content/v2?auth=${OPTIMIZELY_GRAPH_SINGLE_KEY}`,
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

export function getOptimizelySdk(mode: string) {
  return mode === "edit" ? optiDraftSdk : optiPublishedSdk;
}
