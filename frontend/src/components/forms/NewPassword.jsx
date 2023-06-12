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
  
  export default function NewPassword() {
    const initialValues = {
      password: "",
      passwordR: "",
    };
  
    const notify = (values = "Va") => {
      toast.success("Cambio exitoso!");
    };
  
    const validationSchema = Yup.object().shape({
      password: Yup.string()
        .required("Contraseña requerida")
        .min(5, "La contraseña es muy corta")
        .max(20, "La contraseña es muy larga"),
      passwordR: Yup.string()
        .required("Contraseña requerida")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    });
  
    return (
      <CardLogo wd={"380px"} hg={"500px"}>
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
                <FormControl isInvalid={errors.password && touched.password}>
                  <FormLabel htmlFor="password" mt={4}>
                    Contraseña Nueva
                  </FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    borderColor="gray.300"
                    variant="filled"
                    type="password"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.passwordR && touched.passwordR}>
                  <FormLabel htmlFor="passwordR" mt={4}>
                    Repetir Contraseña
                  </FormLabel>
                  <Field
                    as={Input}
                    id="passwordR"
                    name="passwordR"
                    borderColor="gray.300"
                    variant="filled"
                    type="password"
                  />
                  <FormErrorMessage>{errors.passwordR}</FormErrorMessage>
                </FormControl>
                <Button
                  color="white"
                  background={"principal.100"}
                  mt={4}
                  width="full"
                  type="submit"
                >
                  Aceptar
                </Button>
              </Form>
            );
          }}
        </Formik>
      </CardLogo>
    );
  }