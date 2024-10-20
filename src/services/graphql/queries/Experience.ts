import { gql } from "graphql-request";

const q_VisualBuilderQuery = gql`
  query getExperience($key: String, $ver: String, $loc: [Locales]) {
    _Experience(
      locale: $loc
      where: {
        _metadata: { key: { eq: $key } }
        _or: { _metadata: { version: { eq: $ver } } }
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
