import { gql } from "graphql-request";

const q_Content = gql`
  query contentById ($contentId: [String]!, $lang: [Locales]!, $version: String!) {
    _Content(
      ids: $contentId
      locale: $lang
      where: { _metadata: { version: { eq: $version } } }
    ) {
      items {
        _metadata {
          types
        }
      }
    }
  }
`;
