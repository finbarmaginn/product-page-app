import Image from "next/image";
import { Container } from "./styled/Container.styled";
import { Flex } from "./styled/Flex.styled";
import { StyledHeader } from "./styled/Header.styled";
import Logo from '../public/logo.svg'

import { Nav } from "./Nav";
import { SecondaryNav } from "./SecondaryNav";

export default function Header(){

  return (
    <StyledHeader>
      <Container>
        <Flex>
          <Image src={Logo} alt="Logo" />
          <Nav />
          <SecondaryNav />
        </Flex>
      </Container>
    </StyledHeader>
  );
}