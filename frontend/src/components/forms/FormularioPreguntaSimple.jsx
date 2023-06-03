import { Box, Grid, GridItem, Input, Textarea, Select, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Boton from "../pure/Boton";
import { Link } from "wouter";

const categorias = ["Inglés", "Español", "Análisis", "Matemáticas"];

export default function FormularioSimple() {
  const [enunciado, setEnunciado] = useState("");
  const [semestre, setSemestre] = useState("");
  const [opcionCorrecta, setOpcionCorrecta] = useState("");
  const [categoria, setCategoria] = useState("");
  const [opciones, setOpciones] = useState("");

  const handleSelectArchivo = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();
  };

  const handleGuardar = () => {
    // Aquí puedes agregar la lógica para guardar los datos del formulario
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
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="20px">
          <GridItem>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <label htmlFor="enunciado">Enunciado</label>
              <Input
                mt="10px"
                id="enunciado"
                name="enunciado"
                type="text"
                value={enunciado}
                onChange={(e) => setEnunciado(e.target.value)}
                w="100%"
              />
            </Box>
            <Box
              mt="10px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <label htmlFor="opcionCorrecta">Opción correcta</label>
              <Input
                mt="10px"
                id="opcionCorrecta"
                name="opcionCorrecta"
                type="text"
                value={opcionCorrecta}
                onChange={(e) => setOpcionCorrecta(e.target.value)}
                w="100%"
              />
            </Box>
          </GridItem>
          <GridItem>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <label htmlFor="semestre">Semestre</label>
              <Input
                mt="10px"
                id="semestre"
                name="semestre"
                type="text"
                value={semestre}
                onChange={(e) => setSemestre(e.target.value)}
                w="100%"
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
              <Select
                id="categoria"
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                w="100%"
                border="2px solid gray"
                mt="10px"
              >
                {categorias.map((categoria, index) => (
                  <option key={index} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </Select>
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
          <Textarea
            mt="10px"
            id="opciones"
            name="opciones"
            resize="vertical"
            h="170px"
            value={opciones}
            onChange={(e) => setOpciones(e.target.value)}
            w="100%"
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
        <Box mt="50px">
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
            >
              Seleccionar archivo
            </Button>
            <Boton
              as={"link"}
              path={"/preguntas"}
              type={"submit"}
              msg={"Guardar"}
              w={{
                sm: "100%",
                md: "200px",
                lg: "250px",
                tableBreakpoint: "340px",
              }}
              onClick={handleGuardar}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
