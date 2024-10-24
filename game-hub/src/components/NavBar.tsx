import { Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useState } from "react";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack padding={10}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
