import {
  Box,
  Grid,
  GridItem,
  Input,
  Textarea,
  Select,
  Button,
  Flex,
  Text,
  color,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Boton from "../pure/Boton";
import { useState, useRef, useContext } from "react";
import axiosApi from "../../utils/config/axios.config";
import { AppContext } from "../context/AppProvider";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
const categorias = ["Inglés", "Español", "Análisis", "Matemáticas"];

export default function FormularioSimple() {
  const [archivo, setArchivo] = useState(null);
  const archivoInputRef = useRef(null);
  const inputRef = useRef()

  const { token } = useContext(AppContext);

  const procesarArchivo = async (file) => {
    const formData = new FormData();
    formData.append("archivo", file);
    let response = await axiosApi
      .post("/api/question/createQuestionFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });

    if (response.status === 200) {
      toast.success("¡Archivo cargado correctamente!");
    }
  };

  const handleArchivoSeleccionado = (e, setFieldValue) => {
      
      setFieldValue("archivo",  inputRef.current.files[0]);
      

  };

  const handleGuardar = (values) => {
    // Aquí puedes agregar la lógica para guardar los datos del formulario
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    enunciado: Yup.string().required("El enunciado es obligatorio"),
    semestre: Yup.string().required("El semestre es obligatorio"),
    opcionCorrecta: Yup.string().required("La opción correcta es obligatoria"),
    categoria: Yup.string().required("La categoría es obligatoria"),
    opciones: Yup.string().required("Las opciones son obligatorias"),
  });


  const initialValues2 = {
    archivo: null
  }

  const validationSchema2 = Yup.object().shape({
  archivo: Yup.mixed()
    .test("file-type", "El tipo de archivo es XLSX", (value) => {
      if (value) {
        return value.endsWith(".xlsx")
      }
      return true;
    }).required("El archivo es requerido"),
});

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
          validationSchema={validationSchema}
          onSubmit={handleGuardar}
        >
          {(props) => {
            const { errors, setFieldValue, touched } = props;
            return (
              <Form>
                <Grid
                  templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                  gap="20px"
                >
                  <GridItem>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
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
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
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
                        <option>Seleccionar Categoria</option>
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
                </Box>
                <Button
                  w={"100%"}
                  bgColor={"principal.100"}
                  textColor={"white"}
                  mt={"30px"}
                  type="sumbit"
                  _hover={{ backgroundColor: "fondo.100" }}
                >
                    Guardar
                </Button>
                {/* //---------- -----------------------------------------------*/}
                <Box mt="30px">
                  
                </Box>
              </Form>
            );
          }}
        </Formik>
        <Formik
          initialValues={initialValues2}
          validationSchema={validationSchema2}
          onSubmit={()=>{
            procesarArchivo(inputRef.current.files[0])
          }}
        >
          {
            (props)=>{
              const {errors, touched, setFieldValue} = props
              return(
                <Form>
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    justify={"space-between"}
                  >
                    <FormControl isInvalid={errors.archivo && touched.archivo}>
                     <Field id="archivo" name="archivo">
                      {({ field }) => (
                        <Input
                          type="file"
                          ref={inputRef}
                          name="archivo"
                          variant="filled"
                          mb="10px"
                          mt="10px"
                          w={{
                        sm: "100%",
                        md: "200px",
                        lg: "250px",
                        tableBreakpoint: "340px",
                       }}
                        cursor={"pointer"}
                          onChange={(event) => {
                            handleArchivoSeleccionado(event, setFieldValue);
                          }}
                          {...field}
                        />
                      )}
                    </Field>
                    <FormErrorMessage>{errors.archivo}</FormErrorMessage>
                    </FormControl>
                    <Button
                      bgColor="principal.100"
                      textColor="white"
                      w={{
                        sm: "100%",
                        md: "200px",
                        lg: "250px",
                        tableBreakpoint: "340px",
                      }}
                      _hover={{ backgroundColor: "fondo.100" }}
                      mb="10px"
                      mt="10px"
                      type="submit"
                    >
                      Guardar
                    </Button>
                  </Flex>
                    </Form>
              )
            }
            
          }
        </Formik>
      </Box>
    </Box>
  );
}
