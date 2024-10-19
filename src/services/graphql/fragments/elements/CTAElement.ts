import gql from "graphql-tag";

const f_CTAElement = gql`
  fragment CTAElement on CTAElement {
    Text
    Link {
      default
    }
  }
`;
