import React from "react";
import NavBar from "../NavBar";
import { Input, Flex, Box, Button } from '@chakra-ui/react'

export default function Page({ changeOpen, isOpen }) {
  return (
    <Flex
      // h={"100%"}
      // w={isOpen ? "100%" : "calc(100vw - 200px)"}
      w={"100%"}
      h={"100%"}
      left={isOpen ? "0px" : "200px"}
      position={"fixed"}
      transition={"all 0.5s"}
      flexDir={"column"}
    >
      <NavBar
        changeOpen={changeOpen}
        msg={"Página Principal"}
        isOpen={isOpen}
      />
      <Flex
        onClick={() => {
          isOpen ? null : changeOpen();
        }}
        justifyContent={"center"}
        p={"20px"}
        minH={"calc(100% - 60px)"}
        minW={"calc(100% - 200px)"}
        bgColor={"secundario.100"}
      >
        <Box
          p={"15px"}
          borderRadius={"8px"}
          bgColor={"white"}
          w={[300, 400, 500]}
          h={"min-content"}
        >
        <form style={{
            display: "flex",
            flexDirection: "column",
            width:"100%",
            height:"100%",
            gap: "20px"
        }}
        action="" >
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"}>
              <label  htmlFor="nombre">Nombre</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
            </Box>
            <Box  display={"flex"} flexDirection={"column"}>
              <label htmlFor="">Apellido</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
            </Box>
          </Flex>
          <Flex flexDir={"column"}>
           <label htmlFor="">Dirección</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
          </Flex>
          <Flex flexDir={"column"}>
          <label htmlFor="">Correo Institucional</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
          </Flex>
          
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"} >
              <label htmlFor="">Número de Documento</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="">Celular</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
            </Box>
          </Flex>
          <Flex w={"100%"} justifyContent={"space-between"}>
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="">Teléfono</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <label htmlFor="">Código</label>
              <Input mt={"10px"} id="nombre" name="nombre" type="text" disabled></Input>
            </Box>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Button bgColor={"principal.100"} textColor={"white"} w={"150px"}>Editar Información</Button>
            <Button bgColor={"principal.100"} textColor={"white"} w={"150px"}>Siguiente</Button>
          </Flex>
        </form>
        </Box>
      </Flex>
    </Flex>

  );
}
