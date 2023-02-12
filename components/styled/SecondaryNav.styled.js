import styled from "styled-components";

export const StyledSecondaryNav = styled.nav`
  margin-left: auto;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      margin: 0 1rem;
      &:last-of-type {
        margin-right: 0;
      }
      img {
        max-width: 48px;
        height: auto;
      }
    }
  }
`