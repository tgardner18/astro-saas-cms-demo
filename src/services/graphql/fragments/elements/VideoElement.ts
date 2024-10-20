import gql from "graphql-tag";

const f_VideoElement = gql`
  fragment VideoElement on VideoElement {
    placeholder {
      url {
        default
      }
    }
    title
    video {
      url {
        default
      }
    }
  }
`;
