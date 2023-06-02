import React from 'react'
import { Input, Flex, Box, Button, Image, Icon } from "@chakra-ui/react";

import { RiEdit2Fill } from "react-icons/ri";
import Boton from '../pure/Boton';
export default function AdminProfileForm() {
  return (
    <>
         <Box
          p={"20px"}
          borderRadius={"8px"}
          bgColor={"white"}
          minW={[ "200px","350px", "400px", "500px"]}
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
            <Box display="flex" dir="row" position={"relative"} justifyContent={"center"} w={"100%"}>
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                width={["70px", "100px", "130px"]}
                height={["70px", "100px", "130px"]}
                borderRadius={"50%"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
              <Button
                position={"absolute"}
                minW={["21px","27px","30px"]}
                padding={"0"}
                height={["21px","27px","30px"]}
                top={["50px","73px", "100px"]}
                left={["125px","180px","210px", "260px"]}
                borderRadius={"50%"}
                backgroundColor={"principal.100"}
                _hover={"none"}
                _active={"none"}
              >
                <Icon color="white" as={RiEdit2Fill} />
              </Button>
            </Box>
            <Flex 
            gap={["20px","20px"]}
            direction={["column","column","row","row", "row"]} w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} 
              flexDirection={"column"}>
                <label htmlFor="nombre">Nombre</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
                  w={["100%","100%","160px","185px", "200px"]}
                  disabled
                ></Input>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <label 
                htmlFor="apellido">Apellido</label>
                <Input
                  mt={"10px"}
                  id="apellido"
                  name="apellido"
                  type="text"
                  w={["100%","100%","160px","185px", "200px"]}
                  disabled
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
                disabled
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
                disabled
              ></Input>
            </Flex>

            <Flex 
            gap={["20px","20px"]}
            direction={["column","column","row","row", "row"]} w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="documento">Número de Documento</label>
                <Input
                  mt={"10px"}
                  id="documento"
                  name="documento"
                  type="text"
                  w={["100%","100%","160px","185px", "200px"]}
                  disabled
                ></Input>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="celular">Celular</label>
                <Input
                  mt={"10px"}
                  id="celular"
                  name="celular"
                  type="text"
                  w={["100%","100%","160px","185px", "200px"]}
                  disabled
                ></Input>
              </Box>
            </Flex>
            <Flex 
            gap={["20px","20px"]}
             direction={["column","column","row","row", "row"]}w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="telefono">Teléfono</label>
                <Input
                  mt={"10px"}
                  id="telefono"
                  name="telefono"
                  type="text"
                  w={["100%","100%","160px","185px", "200px"]}
                  disabled
                ></Input>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="codigo">Código</label>
                <Input
                  mt={"10px"}
                  id="codigo"
                  name="codigo"
                  type="text"
                  w={["100%","100%","160px","185px", "200px"]}
                  disabled
                ></Input>
              </Box>
            </Flex>
            <Flex flexDirection={["column","column","row","row", "row"]}
              w={"100%"} gap={["8px","8px", "0"]}
            justifyContent={"space-between"}>
              {/* <Button bgColor={"principal.100"} textColor={"white"} w={["100%","100%","170px"]}>
                Editar Información
              </Button> */}
              <Boton msg={"Editar Información"} w={["100%","100%","160px","185px","200px"]}/>
              <Boton msg={"Cambiar Contraseña"} w={["100%","100%","160px","185px","200px"]}/>
            </Flex>
          </Box>
        </Box>
    </>
  )
}
