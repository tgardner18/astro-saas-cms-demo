import { gql } from "graphql-request";

export const f_HeadingElement = gql`
  fragment ParagraphElement on ParagraphElement {
    text {
      html
    }
  }
`;
