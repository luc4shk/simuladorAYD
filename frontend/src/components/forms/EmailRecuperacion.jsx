import {
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
  } from "@chakra-ui/react";
  import * as Yup from "yup";
  import { Formik, Field, Form } from "formik";
  import toast, { Toaster } from "react-hot-toast";
  import CardLogo from "../pure/CardLogo";
  import React from "react";
  
  export default function recuperacion() {
    const initialValues = {
      email: "",
    };
  
    const notify = (values = "Va") => {
      toast.success("Revisa tu correo para cambiar la contraseña");
    };
  
    const validationSchema = Yup.object().shape({
      email: Yup.string().email("Correo Inválido").required("Correo requerido"),
    });
  
    return (
      <CardLogo wd={"450px"} hg={"400px"}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          onSubmit={(values) => {
            notify();
          }}
        >
          {(props) => {
            const { values, errors, isSubmitting, touched } = props;
  
            return (
              <Form>
                <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel textAlign="center" htmlFor="email">
                    Ingresa tu correo para buscar tu cuenta
                  </FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    variant="filled"
                    borderColor="gray.300"
                    type="email"
                    mt={4}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <Button
                  color="white"
                  background={"principal.100"}
                  mt={8}
                  width="full"
                  type="submit"
                >
                  Buscar
                </Button>
                <Toaster position="bottom-right" />
              </Form>
            );
          }}
        </Formik>
      </CardLogo>
    );
  }