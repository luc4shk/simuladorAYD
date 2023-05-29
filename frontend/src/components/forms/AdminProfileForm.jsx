import React from 'react'
import { Input, Flex, Box, Button, Image, Icon } from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";
export default function AdminProfileForm() {
  return (
    <>
         <Box
          p={"20px"}
          borderRadius={"8px"}
          bgColor={"white"}
          minW={[ "300px", "400px", "500px"]}
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
                width={[70, 100, 130]}
                height={[70, 100, 130]}
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
                left={["145px","235px", "260px"]}
                borderRadius={"50%"}
                backgroundColor={"principal.100"}
                _hover={"none"}
                _active={"none"}
              >
                <Icon color="white" as={RiEdit2Fill} />
              </Button>
            </Box>
            <Flex direction={["column", "row"]} w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="nombre">Nombre</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
                  w={["100%","150px", "200px"]}
                  disabled
                ></Input>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="">Apellido</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
                  w={["100%","150px", "200px"]}
                  disabled
                ></Input>
              </Box>
            </Flex>
            <Flex flexDir={"column"}>
              <label htmlFor="">Dirección</label>
              <Input
                mt={"10px"}
                id="nombre"
                name="nombre"
                type="text"
                w={"100%"}
                disabled
              ></Input>
            </Flex>
            <Flex flexDir={"column"}>
              <label htmlFor="">Correo Institucional</label>
              <Input
                mt={"10px"}
                id="nombre"
                name="nombre"
                type="text"
                w={"100%"}
                disabled
              ></Input>
            </Flex>

            <Flex direction={["column","row"]} w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="">Número de Documento</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
                  w={["100%","150px", "200px"]}
                  disabled
                ></Input>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="">Celular</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
                  w={["100%","150px", "200px"]}
                  disabled
                ></Input>
              </Box>
            </Flex>
            <Flex  direction={["column","row"]}w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="">Teléfono</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
                  w={["100%","150px", "200px"]}
                  disabled
                ></Input>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="">Código</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
                  w={["100%","150px", "200px"]}
                  disabled
                ></Input>
              </Box>
            </Flex>
            <Flex flexDirection={["column","row"]}
              w={["100%","200xpx"]} gap={["8px", "0"]}
            justifyContent={"space-between"}>
              <Button bgColor={"principal.100"} textColor={"white"} w={["100%","170px"]}>
                Editar Información
              </Button>
              <Button bgColor={"principal.100"} textColor={"white"} w={["100%","170px"]}>
                Cambiar Contraseña
              </Button>
            </Flex>
          </Box>
        </Box>
    </>
  )
}
