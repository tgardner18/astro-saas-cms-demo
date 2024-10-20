import { gql } from "graphql-request";

const q_VisualBuilderQuery = gql`
  query getExperience($key: String, $version: String, $locale: [Locales]) {
    _Experience(
      locale: $locale
      where: {
        _metadata: { key: { eq: $key } }
        _or: { _metadata: { version: { eq: $version } } }
      }
    ) {
      items {
        composition {
          grids: nodes {
            key
            displayName
            ... on CompositionStructureNode {
              key
              rows: nodes {
                ... on CompositionStructureNode {
                  key
                  columns: nodes {
                    ... on CompositionStructureNode {
                      key
                      elements: nodes {
                        ... on CompositionElementNode {
                          key
                          element {
                            _metadata {
                              types
                            }
                            ...HeadingElement
                            ...ImageElement
                            ...CTAElement
                            ...VideoElement
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        _metadata {
          key
          version
        }
      }
    }
  }
  fragment ds on CompositionDisplaySetting {
    key
    value
  }
`;

// lol
