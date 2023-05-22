import {
  Flex,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import React from "react";


export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const notify = (values="Va") =>{
    toast.success("Ingreso exitoso!")
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Correo Inválido").required("Correo requerido"),
    password: Yup.string()
      .required("Contraseña requerida")
      .min(5, "La contraseña es muy corta")
      .max(20, "La contraseña es muy larga"),
  });

  return (
    <Center h="100vh" bg="gray.100">
      <Formik initialValues={initialValues} validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values)=>{
        notify()
      }}
      >
        {(props) => {

          const {values, errors, isSubmitting, touched} = props

          return (
            <Form>
            <Box
              bg="white"
              width="380px"
              height="500px"
              borderWidth="1px"
              borderRadius="20px"
              overflow="hidden"
              pt="10px"
              px={8}
              boxShadow="lg"
            >
              <Image
                src="../public/Logo1.jpg"
                borderRadius="full"
                boxSize="150px"
                mx="auto"
                my={0}
                alt="Logo"
              />
              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                <Field as={Input} id="email" name="email" variant="filled" borderColor="gray.300" type="email" />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl> 
              <FormControl isInvalid={errors.password && touched.password}>
                <FormLabel htmlFor="password" mt={4}>Contraseña</FormLabel>
                <Field as={Input} id="password" name="password" borderColor="gray.300" variant="filled" type="password" />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
                <Box mt={4} textAlign="center">
                  <Link color="blue.400" href="#" _hover="none">
                    Olvidé mi contraseña
                  </Link>
                </Box>
                <Button
                  color="white"
                  background={"principal.100"}
                  mt={4}
                  width="full"
                  _hover="none"
                  _active="none"
                  type="submit"
                >
                  Ingresar
                </Button>
                <Toaster  position="bottom-right"/>
            </Box>
            </Form> 
          );
        }}
      </Formik>
    </Center>
  );
}
