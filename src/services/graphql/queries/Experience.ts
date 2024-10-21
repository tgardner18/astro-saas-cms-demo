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
        _metadata {
          key
          version
          url {
            default
          }
        }
        composition {
          grids: nodes {
            key
            displayName
            displaySettings {
              ...ds
            }
            ... on CompositionStructureNode {
              key
              rows: nodes {
                ... on CompositionStructureNode {
                  key
                  displaySettings {
                    ...ds
                  }
                  columns: nodes {
                    ... on CompositionStructureNode {
                      key
                      displaySettings {
                        ...ds
                      }
                      elements: nodes {
                        ... on CompositionElementNode {
                          key
                          displaySettings {
                            ...ds
                          }
                          element {
                            _metadata {
                              types
                            }
                            ...HeadingElement
                            ...ImageElement
                            ...CTAElement
                            ...VideoElement
                            ...ParagraphElement
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
      }
    }
  }
  fragment ds on CompositionDisplaySetting {
    key
    value
  }
`;

// lol
