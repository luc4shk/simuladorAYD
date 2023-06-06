import {
  Box,
  FormControl,
  Button,
  FormErrorMessage,
  Input,
  MenuOptionGroup,
  Menu,
  Select,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
export default function FormularioPrueba() {
  const initialValues = {
    nombre: "",
    descripcion: "",
    semestre: "",
    duracion: "",
    competencias: "",
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("Nombre requerido"),
    descripcion: Yup.string().required("Descripción requerida"),
    semestre: Yup.number().required("Semestre requerido"),
    duracion: Yup.number().required("Duración requerida"),
    

  
  })

  return (
    <Box
      bgColor={"white"}
      w={{
        base: "270px",
        sm: "390px",
        md: "540px",
        lg: "640px",
        tableBreakpoint: "800px",
      }}
      p={"40px"}
      borderRadius={"8px"}
    >
      <Formik initialValues={initialValues}>
        {(props) => {
          const { errors, touched, isSubmitting } = props;
          return (
            <form>
              <Flex gap={"20px"} flexDir={["column","column","row"]} >
                
                <FormControl display={"flex"} flexDir={"column"} gap={"10px"}>
                  <label htmlFor="nombre">Nombre</label>
                  <Field w={"100%"}  name="nombre" id="nombre" type="text" as={Input} />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl display={"flex"} flexDir={"column"} gap={"10px"}>
                  <label htmlFor="descripcion">Descripción</label>
                  <Field
                    w={"100%"} 
                    name="descripcion"
                    id="descripcion"
                    type="text"
                    as={Input}
                  />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
              </Flex>
              <Flex mt={"20px"} gap={"20px"} flexDir={["column","column","row"]}>
                <FormControl display={"flex"} flexDir={"column"} gap={"10px"}>
                  <label htmlFor="">Semestre</label>
                  <Field w={"100%"} name="semestre" id="semestre" type="text" as={Input} />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
                <FormControl display={"flex"} flexDir={"column"} gap={"10px"}>
                  <label htmlFor="">Duración de la prueba</label>
                  <Field w={"100%"} name="duracion" id="duracion" type="text" as={Input} />
                  <FormErrorMessage></FormErrorMessage>
                </FormControl>
              </Flex>
              <FormControl display={"flex"} flexDir={"column"} gap={"10px"} mt={"20px"}>
                <label htmlFor="">Competencias</label>
                <Field w={"100%"} as={Select}>
                  <option value="">a</option>
                </Field>

                <FormErrorMessage></FormErrorMessage>
              </FormControl>
              <Button
                bgColor={"principal.100"}
                onSubmit={() => alert("aa")}
                color={"white"}
                _hover={"none"}
                _active={"none"}
                w={"100%"}
                mt={"20px"}
              >
                Enviar
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
}
