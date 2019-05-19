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
      <Image src={logoImage} />
      <form>
        <Input placeholder="Nunca dejes de buscar" />
        <Button type="submit" />
      </form>
    </Toolbar>
  </StyledHeader>
);
export default Header;
