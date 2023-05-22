import {Flex, Box,Button,Center,FormControl,FormLabel,Input, Link, Image} from "@chakra-ui/react";
import React from "react";

export default function Login() {
  return (
    <Center h="100vh" bg="gray.100">
      <Box bg="white"
        width="380px"
        height="450px"
        borderWidth="1px"
        borderRadius="20px"
        overflow="hidden"
        pt="10px"
        px={8}
        boxShadow="lg"
      >
        <Image src="../public/Logo1.jpg" borderRadius="full" boxSize="150px" mx="auto" my={0} alt="Logo" />
        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input borderColor="gray.300" type="email" />
          <FormLabel mt={4}>Contraseña</FormLabel>
          <Input borderColor="gray.300" type="password" />
          <Box mt={4} textAlign="center">
            <Link color="blue.400" href="#" _hover="none">Olvidé mi contraseña</Link>
           </Box>
          <Button color="white" background={"principal.100"} mt={4} width="full" _hover="none" _active="none">
            Ingresar
          </Button>
        </FormControl>
      </Box>
    </Center>
  );
}
