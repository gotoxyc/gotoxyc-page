import Head from "next/head";
import { useState } from "react";
import { FiChevronDown, FiPhone, FiMail, FiShare2 } from "react-icons/fi";
import styles from "../styles/Home.module.css";
import { FaInstagram } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  Text,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import MusicPlayer from "./MusicPlayer";
import { LocalMusicPlayer } from "./LocalMusicPlayer";
import Link from "next/link";
import { PhotoGrid } from "./Grid";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box px={8}>
      <Head>
        <title>Gotoxyc</title>
        <meta
          name="description"
          content="La pagina de marycielo, está muy bonita, vengan a verla"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex alignItems="center" justify="center" paddingY="4">
        <Heading>Gotoxyc</Heading>
      </Flex>

      <Flex justify="space-between" align="center">
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
      <PhotoGrid />
      <LocalMusicPlayer />
    </Box>
  );
}
