import { gql } from "graphql-request";

export const f_ImageElement = gql`
  fragment ImageElement on ImageElement {
    altText
    imageLink {
      url {
        default
      }
    }
  }
`;
