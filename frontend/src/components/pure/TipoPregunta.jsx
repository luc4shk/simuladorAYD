import React from "react";
import { Box, Button, Center, Heading, Stack } from "@chakra-ui/react";

export default function TipoPregunta() {
  return (
    <Box>
      <Center>
        <Heading mt="100px" textAlign="center" fontSize={["lg", "xl"]} mb={4}>
          Seleccione un tipo de pregunta
        </Heading>
      </Center>
      <Center>
        <Stack
          direction={["column", "column", "row"]}
          spacing={2}
          alignItems={["center", "flex-start"]}
          mt="100px"
        >
          <Button
            bgColor="principal.100"
            textColor="white"
            w={["100%", "100%", "250px"]}
            display="flex"
            alignItems="center"
            borderRadius="18px"
            mb={[2, 2, 0]} 
          >
            Preguntas Simples
          </Button>
          <Button
            bgColor="principal.100"
            textColor="white"
            w={["100%", "100%", "250px"]}
            display="flex"
            alignItems="center"
            borderRadius="18px"
          >
            Preguntas con Imagen
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
