import { Flex, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import NextLink from "next/link";
import { useColorMode } from "@chakra-ui/react";

export function MenuBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center" marginBottom={8} justify="space-evenly" width="full">
      <ChakraLink as={NextLink} href="/">
        all
      </ChakraLink>
      <ChakraLink as={NextLink} href="tattoo">
        tattoo
      </ChakraLink>
      <ChakraLink as={NextLink} href="performance">
        performance
      </ChakraLink>
      <ChakraLink as={NextLink} href="pottery">
        pottery
      </ChakraLink>
      <ChakraLink as={NextLink} href="contact">
        contact
      </ChakraLink>
      <IconButton onClick={toggleColorMode} variant="ghost">
        {colorMode === "dark" ? <FaSun /> : <FaMoon />}
      </IconButton>
    </Flex>
  );
}
