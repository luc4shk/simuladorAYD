import { Box, Button, Center, Input, Textarea } from "@chakra-ui/react";
import React from "react";

export default function AgregarCategoria() {
  const competencias = ["Competencia 1", "Competencia 2", "Competencia 3"];
  return (
    <Box position="fixed" bg="gray.100">
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
            >
              <label htmlFor="competencia">Competencia</label>
              <select
                id="competencia"
                name="competencia"
                maxW={["200px", "300px", "350px", "400px"]}
                w="400px"
                border="2px solid gray"
                p="8px"
              >
                {competencias.map((competencia, index) => (
                  <option key={index} value={competencia}>
                    {competencia}
                  </option>
                ))}
              </select>
            </Box>
            <Button
              bgColor="principal.100"
              textColor="white"
              w={["200px", "300px", "350px", "400px"]}
              mt="30px"
              type="submit"
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
