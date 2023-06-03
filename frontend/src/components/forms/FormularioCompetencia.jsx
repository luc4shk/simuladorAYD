import { Box, Button, Center, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { Link } from "wouter";
import Boton from "../pure/Boton";

export default function FormularioCompetencia() {
  return (
    <Box position="fixed">
      <Center h="100%">
        <Box
          p="40px"
          borderRadius="8px"
          bgColor="white"
          minW={["150px", "250px", "480px", "550px"]}
          overflow="hidden"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Box display="flex" flexDirection="column" justifyContent="center">
              <label htmlFor="nombre">Nombre</label>
              <Input
                mt="10px"
                id="nombre"
                name="nombre"
                type="text"
                maxW={["200px", "300px", "350px", "400px"]}
                w="400px"
              />
            </Box>
            <Box
              mt="10px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <label htmlFor="descripcion">Descripción</label>
              <Textarea
                mt="10px"
                id="descripcion"
                name="descripcion"
                resize="none"
                h="180px"
                maxW={["200px", "300px", "350px", "400px"]}
                w="400px"
              />
            </Box>
            <Boton
              as={"link"}
              path={"/competencias"}
              w={["200px", "300px", "350px", "400px"]}
              mt={"30px"}
              type={"submit"}
              msg={"Guardar"}
            />
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
