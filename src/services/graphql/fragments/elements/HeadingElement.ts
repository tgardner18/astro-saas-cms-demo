import { gql } from "graphql-request";

export const f_HeadingElement = gql`
  fragment HeadingElement on HeadingElement {
    headingText
  }
`;
