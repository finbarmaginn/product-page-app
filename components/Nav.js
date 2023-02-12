import { StyledPrimaryNav } from "./styled/PrimaryNav.styled";

export function Nav() {
  return (
    <StyledPrimaryNav>
      <ul>
        <li>
          <a href='#'>Collections</a>
        </li>
        <li>
          <a href='#'>Men</a>
        </li>
        <li>
          <a href='#'>Women</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </StyledPrimaryNav>
  );
}