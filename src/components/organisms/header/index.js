import React from "react";

// Style component
import { StyledHeader, Toolbar } from "./styles";

// Images
import logoImage from "../../../logo.png";

// Atoms
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import Image from "../../atoms/image";

const Header = () => (
  <StyledHeader>
    <Toolbar>
      <Image src={logoImage} alt="Mercado Libre Logo"/>
      <form>
        <Input placeholder="Nunca dejes de buscar" aria-label="Nunca dejes de buscar"/>
        <Button type="submit" aria-label="Buscar" />
      </form>
    </Toolbar>
  </StyledHeader>
);
export default Header;
