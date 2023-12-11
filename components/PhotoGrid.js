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
];

export function PhotoGrid() {
  return (
    <Flex flexWrap="wrap" gap={4}>
      {listaDeImagenes.map((imagen, index) => (
        <div key={index}>
          <Image
            src={imagen}
            alt="Una muchacha vestida de rojo"
            placeholder="blur"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      ))}
    </Flex>
  );
}
