import { Box, Button, Center, Input, Textarea } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { Link } from "wouter";
import Boton from "../pure/Boton";

export default function FormularioCompetencia() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.nombre) {
        errors.nombre = "El nombre es requerido";
      }

      if (!values.descripcion) {
        errors.descripcion = "La descripción es requerida";
      }

      return errors;
    },
    onSubmit: (values) => {
      // Lógica para enviar el formulario
      console.log(values);
    },
  });

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
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.nombre && formik.errors.nombre && (
                <span style={{ color: "red" }}>{formik.errors.nombre}</span>
              )}
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
                resize="none"
                h="180px"
                maxW={["200px", "300px", "350px", "400px"]}
                w="400px"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.descripcion && formik.errors.descripcion && (
                <span style={{ color: "red" }}>{formik.errors.descripcion}</span>
              )}
            </Box>
            <Boton
              as={"link"}
              path={"/competencias"}
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
 