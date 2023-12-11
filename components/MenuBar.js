import { Flex, Link as ChakraLink } from "@chakra-ui/react";

import Link from "next/link";

export function MenuBar() {
  return (
    <Flex align="center" marginBottom={4} justify="space-evenly">
      <Link href="/">
        <ChakraLink>all</ChakraLink>
      </Link>
      <Link href="tattoo">
        <ChakraLink>tattoo</ChakraLink>
      </Link>
      <Link href="performance">
        <ChakraLink>performance</ChakraLink>
      </Link>
      <Link href="pottery">
        <ChakraLink>pottery</ChakraLink>
      </Link>
      <Link href="contact">
        <ChakraLink>contact</ChakraLink>
      </Link>
    </Flex>
  );
}
