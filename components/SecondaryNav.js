import Image from "next/image";
import { StyledSecondaryNav } from "./styled/SecondaryNav.styled";
import avatar from "../public/image-avatar.png";
import cart from "../public/icon-cart.svg";
import { Flex } from "./styled/Flex.styled";

export function SecondaryNav() {
  return (
    <StyledSecondaryNav>
      <ul>
        <Flex>
          <li>
            <a href='#'>
              <Image src={cart} width='26' height='26' alt='cart' />
            </a>
          </li>
          <li>
            <a href='#'>
              <Image src={avatar} alt='avatar' />
            </a>
          </li>
        </Flex>
      </ul>
    </StyledSecondaryNav>
  );
}
