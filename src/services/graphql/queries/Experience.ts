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
          displaySettings {
            ...ds
          }
          grids: nodes {
            displaySettings {
              ...ds
            }
            displayName
            ... on CompositionStructureNode {
              rows: nodes {
                displaySettings {
                  ...ds
                }
                ... on CompositionStructureNode {
                  columns: nodes {
                    displaySettings {
                      ...ds
                    }
                    ... on CompositionStructureNode {
                      elements: nodes {
                        displaySettings {
                          ...ds
                        }
                        ... on CompositionElementNode {
                          displayTemplateKey
                          element {
                            _metadata {
                              types
                            }
                            ...HeadingElement
                            ...ImageElement
                            ...CTAElement
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
