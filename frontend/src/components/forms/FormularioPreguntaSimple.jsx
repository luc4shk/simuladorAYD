import { Box, Grid, GridItem, Input, Textarea, Select, Button, Flex, Text, color } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Boton from "../pure/Boton";
import { useState, useRef } from "react";

const categorias = ["Inglés", "Español", "Análisis", "Matemáticas"];

export default function FormularioSimple() {
  const [archivo, setArchivo] = useState(null);
  const archivoInputRef = useRef(null);

  const handleSelectArchivo = () => {
    archivoInputRef.current.click();
  };

  const handleArchivoSeleccionado = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArchivo(file);
    }
  };

  const handleGuardar = (values) => {
    // Aquí puedes agregar la lógica para guardar los datos del formulario
    console.log(values);
  };

  return (
    <Box>
      <Box
        bg="white"
        p="40px"
        borderRadius="8px"
        w={{
          base: "270px",
          sm: "390px",
          md: "540px",
          lg: "640px",
          tableBreakpoint: "800px",
        }}
        overflow="hidden"
      >
        <Formik
          initialValues={{
            enunciado: "",
            semestre: "",
            opcionCorrecta: "",
            categoria: "",
            opciones: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.enunciado) {
              errors.enunciado = "Campo requerido";
            }
            if (!values.semestre) {
              errors.semestre = "Campo requerido";
            }
            if (!values.opcionCorrecta) {
              errors.opcionCorrecta = "Campo requerido";
            }
            if (!values.categoria) {
              errors.categoria = "Campo requerido";
            }
            if (!values.opciones) {
              errors.opciones = "Campo requerido";
            }
            return errors;
          }}
          onSubmit={handleGuardar}
        >
          <Form>
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="20px">
              <GridItem>
                <Box display="flex" flexDirection="column" justifyContent="center">
                  <label htmlFor="enunciado">Enunciado</label>
                  <Field
                    as={Input}
                    mt="10px"
                    id="enunciado"
                    name="enunciado"
                  />
                  <ErrorMessage
                    name="enunciado"
                    component={Text}
                    color="red.500"
                    mt="2"
                  />
                </Box>
                <Box
                  mt="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <label htmlFor="opcionCorrecta">Opción correcta</label>
                  <Field
                    as={Input}
                    mt="10px"
                    id="opcionCorrecta"
                    name="opcionCorrecta"
                  />
                  <ErrorMessage
                    name="opcionCorrecta"
                    component={Text}
                    color="red.500"
                    mt="2"
                  />
                </Box>
              </GridItem>
              <GridItem>
                <Box display="flex" flexDirection="column" justifyContent="center">
                  <label htmlFor="semestre">Semestre</label>
                  <Field
                    as={Input}
                    mt="10px"
                    id="semestre"
                    name="semestre"
                  />
                  <ErrorMessage
                    name="semestre"
                    component={Text}
                    color="red.500"
                    mt="2"
                  />
                </Box>
                <Box
                  mt="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  w="100%"
                >
                  <label htmlFor="categoria">Categoría</label>
                  <Field
                    as={Select}
                    id="categoria"
                    name="categoria"
                    border="2px solid gray"
                    mt="10px"
                  >
                    {categorias.map((categoria, index) => (
                      <option key={index} value={categoria}>
                        {categoria}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="categoria"
                    component={Text}
                    color="red.500"
                    mt="2"
                  />
                </Box>
              </GridItem>
            </Grid>
            <Box
              mt="10px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <label htmlFor="opciones">Opciones</label>
              <Field
                as={Textarea}
                mt="10px"
                id="opciones"
                name="opciones"
                resize="vertical"
                h="170px"
              />
              <ErrorMessage
                name="opciones"
                component={Text}
                color="red.500"
                mt="2"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Boton
                as={"link"}
                path={"/preguntas"}
                mt="30px"
                // w={["200px", "300px", "350px", "400px"]}
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "300px",
                  lg: "370px",
                  tableBreakpoint: "420px",
                }}
                msg={"Agregar"}
              />
            </Box>
            {/* //---------- -----------------------------------------------*/}
            <Box mt="30px">
            {archivo && (
                  <Text fontSize="sm">
                    {archivo.name} 
                  </Text>
                )}
                <input
                  type="file"
                  ref={archivoInputRef}
                  style={{ display: "none"}}
                  onChange={handleArchivoSeleccionado}
                />
              <Flex
                direction={{ base: "column", md: "row" }}
                justify={"space-between"}
              >
                <Button
                  colorScheme="blue"
                  onClick={handleSelectArchivo}
                  w={{
                    sm: "100%",
                    md: "200px",
                    lg: "250px",
                    tableBreakpoint: "340px",
                  }}
                  mb="10px"
                  mt="10px"
                >
                  Seleccionar archivo
                </Button>
                <Boton
                  as={"link"}
                  path={"/preguntas"}
                  type={"submit"}
                  mt="10px"
                  msg={"Guardar"}
                  w={{
                    sm: "100%",
                    md: "200px",
                    lg: "250px",
                    tableBreakpoint: "340px",
                  }}
                />
              </Flex>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
