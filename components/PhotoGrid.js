import { Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import laMarDeRojo from "../public/9M6A3040.jpeg";

const listaDeImagenes = [
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
  laMarDeRojo,
];

const SIZE = 194;

const style = { width: SIZE + "px", height: SIZE + "px" };

export function PhotoGrid() {
  return (
    <Flex flexWrap="wrap" gap={4}>
      {listaDeImagenes.map((imagen, index) => (
        <div key={index}>
          <Image
            src={imagen}
            alt="Una muchacha vestida de rojo"
            placeholder="blur"
            style={style}
          />
        </div>
      ))}
    </Flex>
  );
}
