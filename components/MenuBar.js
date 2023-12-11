import { Flex, Link as ChakraLink } from "@chakra-ui/react";

import NextLink from "next/link";

export function MenuBar() {
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
    </Flex>
  );
}
