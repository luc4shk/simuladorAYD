import React from "react";
import NavBar from "../NavBar";
import { Input, Flex, Box, Button, Image, Icon } from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";

export default function Page({ changeOpen, isOpen }) {
  return (
    <Flex
      w={isOpen ? "100%" : "calc(100% - 200px)"}
      minHeight={"100vh"}
      left={isOpen ? "0px" : "200px"}
      position={"relative"}
      transition={"all 0.5s"}
      flexDir={"column"}
      bgColor={"secundario.100"}
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
      >
        <Box
          p={"20px"}
          borderRadius={"8px"}
          bgColor={"white"}
          w={[300, 400, 500]}
          maxHeight={"900px"}
          overflow={"hidden"}
          css={{
            "&::-webkit-scrollbar": {
              width: "0px",
            },
            "&::-webkit-scrollbar-track": {
              width: "0px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#ddd",
              borderRadius: "24px",
            },
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              gap: "20px",
            }}
            action=""
          >
            <Box display="flex" justifyContent={"center"} w={"100%"}>
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                width={"130px"}
                height={"130px"}
                borderRadius={"50%"}
                objectFit={"cover"}
                objectPosition={"center"}
              />
              <Button
                position={"relative"}
                minW={"30px"}
                padding={"0"}
                height={"30px"}
                // transform={"translate(40px,100px)"}
                top={"100px"}
                left={"-35px"}
                borderRadius={"50%"}
                backgroundColor={"principal.100"}
                _hover={"none"}
                _active={"none"}
              >
                <Icon color="white" as={RiEdit2Fill} />
              </Button>
            </Box>
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="nombre">Nombre</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
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
                disabled
              ></Input>
            </Flex>

            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="">Número de Documento</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
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
                  disabled
                ></Input>
              </Box>
            </Flex>
            <Flex w={"100%"} justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <label htmlFor="">Teléfono</label>
                <Input
                  mt={"10px"}
                  id="nombre"
                  name="nombre"
                  type="text"
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
                  disabled
                ></Input>
              </Box>
            </Flex>
            <Flex justifyContent={"space-between"} py={"20px"}>
              <Button bgColor={"principal.100"} textColor={"white"} w={"170px"}>
                Editar Información
              </Button>
              <Button bgColor={"principal.100"} textColor={"white"} w={"170px"}>
                Cambiar Contraseña
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
