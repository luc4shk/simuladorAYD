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
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Boton from "../pure/Boton";
import { useState, useRef, useContext, useEffect } from "react";
import axiosApi from "../../utils/config/axios.config";
import { AppContext } from "../context/AppProvider";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import useLocation from "wouter/use-location";

export default function FormularioConvocatoria() {
  const [archivo, setArchivo] = useState(null);
  const archivoInputRef = useRef(null);
  const inputRef = useRef();
  const ARef = useRef();
  const BRef = useRef();
  const CRef = useRef();
  const DRef = useRef();
  const [loc, setLoc] = useLocation();
  const [categorias, setCategorias] = useState();

  const { token } = useContext(AppContext);

  const obtenerCategorias = async () => {
    let response = await axiosApi
      .get("api/categoria/?estado=1", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });
    setCategorias(response.data);
  };

  const handleArchivoSeleccionado = (e, setFieldValue) => {
    setFieldValue("archivo", inputRef.current.files[0]);
  };

  const agregarConvocatoria = async (
    nombre,
    descripcion,
    fecha_inicio,
    fecha_fin,
    prueba_id,
    archivo
  ) => {
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("fecha_inicio", fecha_inicio);
    formData.append("fecha_fin", fecha_fin);
    formData.append("prueba_id", prueba_id);
    formData.append("archivo", archivo);

    let response = await axiosApi
      .post("/api/convocatoria/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      })
      .finally(() => {
        setLoc("/preguntas");
      });

    if (response.status === 200) {
      toast.success("¡Pregunta agregada correctamente!");
    }
  };

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
    descripcion: Yup.string().required("La descripción es requerida"),
    fecha_inicio: Yup.string().required("La fecha inicial es requerida"),
    fecha_fin: Yup.string().required("La fecha final es requerida"),
    prueba_id: Yup.string().required("La prueba es requerida"),
    archivo: Yup.mixed()
      .test("file-type", "El tipo de archivo es XLSX", (value) => {
        if (value) {
          return value.endsWith(".xlsx");
        }
        return true;
      })
      .required("El archivo es requerido"),
  });

  const initialValues2 = {
    archivo: null,
  };

  const validationSchema2 = Yup.object().shape({
    archivo: Yup.mixed()
      .test("file-type", "El tipo de archivo es XLSX", (value) => {
        if (value) {
          return value.endsWith(".xlsx");
        }
        return true;
      })
      .required("El archivo es requerido"),
  });

  useEffect(() => {
    obtenerCategorias();
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
            nombre: "",
            descripcion: "",
            fecha_inicio: "",
            fecha_fin: "",
            prueba_id: "",
            archivo: ""
          }}
          validationSchema={validationSchema}
          onSubmit={({
            enunciado,
            opcionA,
            opcionB,
            opcionC,
            opcionD,
            respuesta,
            semestre,
            categoria,
          }) => {
            
          }}
        >
          {(props) => {
            const { errors, setFieldValue, touched } = props;
            return (
              <Form>
                <Box
                  display="flex"
                  flexDirection={["column","column","row"]}
                  justifyContent="center"
                  flexDir={["column", "column", "row"]} gap={"20px"}
                >
                    <Box w={"100%"}>
                  <FormLabel htmlFor="enunciado">Nombre</FormLabel>
                  <FormControl
                    isInvalid={touched.nombre && errors.nombre}
                  >
                    <Field
                      as={Input}
                      id="nombre"
                      name="nombre"
                      resize={"none"}
                    />
                    <FormErrorMessage>{errors.nombre}</FormErrorMessage>
                  </FormControl>
                  </Box>
                  <Box w={"100%"}>
                  <FormLabel htmlFor="prueba_id">Prueba</FormLabel>
                    <FormControl
                      isInvalid={touched.prueba_id && errors.prueba_id}
                    >
                      <Field
                        as={Select}
                        id="prueba_id"
                        name="prueba_id"
                        border="2px solid gray"
                      >
                        <option>Seleccione una categoria</option>
                        {categorias &&
                          categorias.map((categoria, index) => (
                            <option key={categoria.id} value={categoria.id}>
                              {categoria.nombre}
                            </option>
                          ))}
                      </Field>
                      <FormErrorMessage>{errors.prueba_id}</FormErrorMessage>
                    </FormControl>
                    </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection={["column", "column", "row"]}
                  mt={"20px"}
                  width={"100%"}
                  alignItems={"center"}
                >
                  <Box w={"100%"}>
                    <FormLabel htmlFor="semestre">Semestre</FormLabel>
                    <FormControl
                      isInvalid={touched.semestre && errors.semestre}
                    >
                      <Field as={Input} width={"100%"} id="semestre" name="semestre" />
                      <FormErrorMessage>{errors.semestre}</FormErrorMessage>
                    </FormControl>
                  </Box>
                </Box>
                <Box
                  mt="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Flex flexDir={["column", "column", "row"]} gap={"20px"}>
                    <FormControl isInvalid={errors.fecha_inicio && touched.fecha_inicio}>
                      <FormLabel htmlFor="opcionA">Fecha de inicio</FormLabel>
                      <Field
                        id="fecha_inicio"
                        name="fecha_inicio"
                        as={Input}
                        resize={"none"}
                        type={"date"}
                        cursor="pointer"
                      />
                      <FormErrorMessage>{errors.fecha_inicio}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.fecha_fin && touched.fecha_fin}>
                      <FormLabel htmlFor="opcionA">Fecha final</FormLabel>
                      <Field
                        id="fecha_fin"
                        name="fecha_fin"
                        as={Input}
                        resize={"none"}
                        type={"date"}
                        cursor="pointer"
                      />
                      <FormErrorMessage>{errors.fecha_fin}</FormErrorMessage>
                    </FormControl>

                  </Flex>
                  <Flex flexDir={["column", "column", "row"]} gap={"20px"}>
                    <FormControl isInvalid={errors.archivo && touched.archivo}>
                    <FormLabel>Archivo</FormLabel>
                    <Field id="archivo" name="archivo">
                      {({ field }) => (
                        <Input
                          type="file"
                          ref={inputRef}
                          name="archivo"
                          variant="filled"
                          mb="10px"
                          mt="10px"
                          w={"100%"}
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

                    <FormControl isInvalid={errors.opcionD && touched.opcionD}>
                      <FormLabel htmlFor="opcionD">Opción D</FormLabel>
                      <Field
                        id="opcionD"
                        name="opcionD"
                        as={Textarea}
                        resize={"none"}
                      />
                      <FormErrorMessage>{errors.opcionD}</FormErrorMessage>
                    </FormControl>
                  </Flex>
                  <FormControl
                    isInvalid={errors.respuesta && touched.respuesta}
                  >
                    <FormLabel htmlFor="respuesta">Respuesta</FormLabel>
                    <Field id="respuesta" name="respuesta" as={Input} />
                    <FormErrorMessage>{errors.respuesta}</FormErrorMessage>
                  </FormControl>
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
              </Form>
            );
          }}
        </Formik>
        <Formik
          initialValues={initialValues2}
          validationSchema={validationSchema2}
          onSubmit={() => {
            procesarArchivo(inputRef.current.files[0]);
          }}
        >
          {(props) => {
            const { errors, touched, setFieldValue } = props;
            return (
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
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
}
