import React from "react";
import { Input, Flex, Box, Button, Image, Icon } from "@chakra-ui/react";
import Boton from "../pure/Boton";
export default function EditarInformacionAdmin() {
  return (
    <>
      <Box
        p={"20px"}
        borderRadius={"8px"}
        bgColor={"white"}
        minW={["200px", "350px", "400px", "500px"]}
        maxHeight={"auto"}
        overflow={"hidden"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={"100%"}
          h={"100%"}
          gap={"20px"}
          action=""
        >
          <Flex
            gap={["20px", "20px"]}
            direction={["column", "column", "row", "row", "row"]}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="nombre">Nombre</label>
              <Input
                mt={"10px"}
                id="nombre"
                name="nombre"
                type="text"
                w={["100%", "100%", "160px", "185px", "200px"]}
              ></Input>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="apellido">Apellido</label>
              <Input
                mt={"10px"}
                id="apellido"
                name="apellido"
                type="text"
                w={["100%", "100%", "160px", "185px", "200px"]}
              ></Input>
            </Box>
          </Flex>
          <Flex flexDir={"column"}>
            <label htmlFor="direccion">Dirección</label>
            <Input
              mt={"10px"}
              id="direccion"
              name="direccion"
              type="text"
              w={"100%"}
            ></Input>
          </Flex>
          <Flex flexDir={"column"}>
            <label htmlFor="correo">Correo Institucional</label>
            <Input
              mt={"10px"}
              id="correo"
              name="correo"
              type="text"
              w={"100%"}
            ></Input>
          </Flex>

          <Flex
            gap={["20px", "20px"]}
            direction={["column", "column", "row", "row", "row"]}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="documento">Número de Documento</label>
              <Input
                mt={"10px"}
                id="documento"
                name="documento"
                type="text"
                w={["100%", "100%", "160px", "185px", "200px"]}
              ></Input>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="celular">Celular</label>
              <Input
                mt={"10px"}
                id="celular"
                name="celular"
                type="text"
                w={["100%", "100%", "160px", "185px", "200px"]}
              ></Input>
            </Box>
          </Flex>
          <Flex
            gap={["20px", "20px"]}
            direction={["column", "column", "row", "row", "row"]}
            w={"100%"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="telefono">Teléfono</label>
              <Input
                mt={"10px"}
                id="telefono"
                name="telefono"
                type="text"
                w={["100%", "100%", "160px", "185px", "200px"]}
              ></Input>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="codigo">Código</label>
              <Input
                mt={"10px"}
                id="codigo"
                name="codigo"
                type="text"
                w={["100%", "100%", "160px", "185px", "200px"]}
              ></Input>
            </Box>
          </Flex>
          <Flex
            flexDirection={["column", "column", "row", "row", "row"]}
            w={"100%"}
            gap={["8px", "8px", "0"]}
            justifyContent={"center"}
          >
            <Boton
              as={"link"}
              path={"/"}
              msg={"Guardar"}
              w={["100%", "100%", "160px", "185px", "200px"]}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}