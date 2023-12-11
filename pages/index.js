import Head from "next/head";

import { Container, Flex, Heading } from "@chakra-ui/react";

import { LocalMusicPlayer } from "../components/LocalMusicPlayer";

import { PhotoGrid } from "../components/PhotoGrid";
import { MenuBar } from "../components/MenuBar";

export default function Home() {
  return (
    <Container centerContent maxW="container.xl">
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

      <MenuBar />
      <PhotoGrid />

      <LocalMusicPlayer />
    </Container>
  );
}
