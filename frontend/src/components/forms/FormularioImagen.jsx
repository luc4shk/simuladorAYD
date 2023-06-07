import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Box, FormControl, Input, Image, Button, Flex, FormErrorMessage } from "@chakra-ui/react";

export default function FormularioImagen() {
  const initialValues = {
    imagen: null,
  };

 
const validationSchema = Yup.object().shape({
  imagen: Yup.mixed()
    .test("file-type", "El tipo de archivo es PNG/JPEG", (value) => {
      console.log(value)
      console.log(value.endsWith(".jpeg"))
      if (value) {
        return value.endsWith(".jpeg") || value.endsWith(".png")
      }
      return true;
    }).required("La imagen es requerida"),
});


  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0].value;
    console.log("alo?"+ file)
    console.log(event)
    setFieldValue("imagen", file);
  };

  return (
    <Box
      w={["250px", "350px", "400px", "400px", "500px"]}
      bgColor="white"
      borderRadius="8px"
      height="auto"
      padding="20px"
    >
      <Flex w="100%" alignItems="center" justifyContent="center" mb="15px">
        <Image
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          width={["100px", "130px"]}
          height={["100px", "130px"]}
          borderRadius="50%"
          objectFit="cover"
          objectPosition="center"
        />
      </Flex>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => {}}>
        {(props) => {
          const { errors, touched, setFieldValue } = props;

          return (
            <Form>
              <Flex flexDir={"column"} gap={"15px"}>
              <FormControl isInvalid={errors.imagen && touched.imagen} display="flex" justifyContent="center" flexDir={"column"}>
                <Field id="imagen" name="imagen" >
                  {({ field }) => (
                    <Input type="file" 
                     variant="unstyled" onChange={(event) => handleFileChange(event, setFieldValue)} {...field} />
                  )}
                </Field>
                <FormErrorMessage>{errors.imagen}</FormErrorMessage>
              </FormControl>
              <Button type="submit" w="100%">
                Actualizar
              </Button>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}
