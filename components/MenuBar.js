import { FiPhone, FiMail, FiShare2 } from "react-icons/fi";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Text,
  MenuDivider,
  Box,
  Flex,
} from "@chakra-ui/react";

import Link from "next/link";

export function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex justify="space-between" align="center" marginBottom={4}>
      <Menu
        closeOnBlur
        closeOnSelect
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      >
        <MenuButton
          onMouseEnter={() => setIsOpen(true)}
          as={Text}
          _hover={{ fontWeight: "bold" }}
          fontSize={"2xl"}
          m={0}
        >
          Menu
        </MenuButton>

        <MenuList>
          <MenuItem>gallery</MenuItem>
          <MenuItem>tattoo art</MenuItem>
          <MenuItem>pottery</MenuItem>
          <MenuItem>performance</MenuItem>
          <MenuItem>paintings</MenuItem>
          <MenuItem>clothing</MenuItem>
          <MenuDivider />
          <MenuGroup title="Contact">
            <MenuItem display={"flex"} gap={12}>
              <FiPhone />
              <FaInstagram />
              <FiMail />
              <FiShare2> </FiShare2>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>

      <Box display={"flex"} gap={6}>
        <Link href="gallery">gallery</Link>
        <Link href="gallery">contact</Link>
        <Link href="gallery">cart</Link>
      </Box>
    </Flex>
  );
}
