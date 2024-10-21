import { gql } from "graphql-request";

const q_ContentById = gql`
  query contentById($key: [String]!, $loc: [Locales]!, $ver: String!) {
    _Content(
      ids: $key
      locale: $loc
      where: { _metadata: { version: { eq: $ver } } }
    ) {
      items {
        _metadata {
          types
        }
      }
    }
  }
`;

const q_ContentByPath = gql`
  query contentByPath($url: String!) {
    _Content(where: { _metadata: { url: { default: { eq: $url } } } }) {
      items {
        _metadata {
          key
          version
          locale
        }
      }
    }
  }
`;
