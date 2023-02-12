import styled from "styled-components";

export const StyledPrimaryNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 0 2rem;
    li {
      margin: 0 0.5rem;
      padding: 0;
      height: auto;
      display: inline-block;
      a {
        display: inline-block;
        padding: 2.5rem 0.5rem;
        &:hover {
          padding-bottom: 2.25rem;
          border-bottom: solid 0.25rem ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
