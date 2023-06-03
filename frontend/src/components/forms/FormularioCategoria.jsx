import { Box, Button, Center, Input, Textarea, Select } from "@chakra-ui/react";
import React from "react";
import { Link } from "wouter";
import Boton from "../pure/Boton";

export default function FormularioCategoria() {
  const competencias = ["Competencia 1", "Competencia 2", "Competencia 3"];
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
            w={"100%"}
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
                resize="vertical"
                h="100px"
                maxW={["200px", "300px", "350px", "400px"]}
                w="400px"
              />
            </Box>
            <Box
              mt="20px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              w={["200px", "300px", "350px", "400px"]}
            >
              <label htmlFor="competencia">Competencia</label>
              <Select
                id="competencia"
                name="competencia"
                maxW={["200px", "300px", "350px", "400px"]}
                w="100%"
                border="2px solid gray"
                mt={"10px"}
              >
                {competencias.map((competencia, index) => (
                  <option key={index} value={competencia}>
                    {competencia}
                  </option>
                ))}
              </Select>
            </Box>
            <Boton
              as={"link"}
              path={"/categorias"}
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
