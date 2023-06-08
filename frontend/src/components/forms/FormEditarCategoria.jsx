// import { Box, Button, Select, Center, Textarea } from "@chakra-ui/react";
// import { useFormik } from "formik";
// import {React, useContext, useEffect, useState} from "react";
// import { Link, useRoute } from "wouter";
// import * as Yup from "yup";
// import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
// import Boton from "../pure/Boton";
// import { toast, Toaster } from "react-hot-toast";
// import axiosApi from "../../utils/config/axios.config";
// import { AppContext } from "../context/AppProvider";
// export default function FormularioEditarCategoria() {
//   const competencias = ["Competencia 1", "Competencia 2", "Competencia 3"];
//   const estados = ["Activo", "Inactivo"];

//   const [match, params] = useRoute('/editarCategoria/:id');
//   const { token } = useContext(AppContext);
//   const [datos, setDatos] = useState()
//   const [loading, setLoading] = useState(true)

//   console.log(params.id)
//   const validationSchema = Yup.object().shape({
//     nombre: Yup.string().required("El nombre es requerido"),
//     competencia: Yup.string().required("La competencia es requerida"),
//     estado: Yup.string().required("El estado es requerido"),
//     descripcion: Yup.string().required("La descripción es requerida"),
//   });

//   const getCategoriaById = async (id) =>{
//       let response = await axiosApi.get(`/api/categoria/${id}`,{
//         headers: {
//         Authorization: "Bearer " + token,
//         },
//       }).catch((e) => {
//       toast.error(e.response.data.error);
//     });

//     setDatos({
//       nombre: response.data.nombre,
//       descripcion: response.data.descripcion,
//       estado: response.data.estado,
//       competencias: response.data.competencia
//     })
//     setLoading(false)
//   }

//   useEffect(()=>{
//     getCategoriaById(params.id)
//   })

//   const handleSubmit = (values) => {
//     // Lógica para enviar el formulario
//     console.log(values);
//   };

//   const formik = useFormik({
//     initialValues: {
//       nombre: "",
//       competencia: "",
//       estado: "",
//       descripcion: "",
//     },
//     validationSchema,
//     onSubmit: handleSubmit,
//   });

//   if(loading){
//     return <div>Cargando...</div>
//   }
//   const { errors, touched } = formik;

//   return (
//     <Box>
//       <Center h="100%">
//         <Box
//           p="40px"
//           borderRadius="8px"
//           bgColor="white"
//           minW={["150px", "250px", "480px", "550px"]}
//           overflow="hidden"
//         >
//           <form onSubmit={formik.handleSubmit}>
//             <Box
//               display="flex"
//               flexDirection="column"
//               alignItems="center"
//               textAlign="center"
//             >
//               <Box
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//               >
//                 <FormLabel htmlFor="nombre">Nombre</FormLabel>
//                 <Input
//                   as={Input}
//                   mt="10px"
//                   id="nombre"
//                   name="nombre"
//                   type="text"
//                   maxW={["200px", "300px", "350px", "400px"]}
//                   w="400px"
//                   value={formik.values.nombre}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 <FormControl isInvalid={errors.nombre && touched.nombre}>
//                   <FormErrorMessage>{errors.nombre}</FormErrorMessage>
//                 </FormControl>
//               </Box>
//               <Box
//                 mt="20px"
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//                 w={["200px", "300px", "350px", "400px"]}
//               >
//                 <FormLabel htmlFor="competencia">Competencia</FormLabel>
//                 <Select
//                   as={Select}
//                   id="competencia"
//                   name="competencia"
//                   maxW={["200px", "300px", "350px", "400px"]}
//                   w="100%"
//                   border="2px solid gray"
//                   mt={"10px"}
//                   value={formik.values.competencia}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">Seleccione una competencia</option>
//                   {competencias.map((competencia, index) => (
//                     <option key={index} value={competencia}>
//                       {competencia}
//                     </option>
//                   ))}
//                 </Select>
//                 <FormControl isInvalid={errors.competencia && touched.competencia}>
//                   <FormErrorMessage>{errors.competencia}</FormErrorMessage>
//                 </FormControl>
//               </Box>
//               <Box
//                 mt="20px"
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//                 w={["200px", "300px", "350px", "400px"]}
//               >
//                 <FormLabel htmlFor="estado">Estado</FormLabel>
//                 <Select
//                   as={Select}
//                   id="estado"
//                   name="estado"
//                   maxW={["200px", "300px", "350px", "400px"]}
//                   w="100%"
//                   border="2px solid gray"
//                   mt={"10px"}
//                   value={formik.values.estado}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 >
//                   <option value="">Seleccione un estado</option>
//                   {estados.map((estado, index) => (
//                     <option key={index} value={estado}>
//                       {estado}
//                     </option>
//                   ))}
//                 </Select>
//                 <FormControl isInvalid={errors.estado && touched.estado}>
//                   <FormErrorMessage>{errors.estado}</FormErrorMessage>
//                 </FormControl>
//               </Box>
//               <Box
//                 mt="10px"
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="center"
//               >
//                 <FormLabel htmlFor="descripcion">Descripción</FormLabel>
//                 <Textarea
//                   as={Textarea}
//                   mt="10px"
//                   id="descripcion"
//                   name="descripcion"
//                   resize="vertical"
//                   h="100px"
//                   maxW={["200px", "300px", "350px", "400px"]}
//                   w="400px"
//                   value={formik.values.descripcion}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                 />
//                 <FormControl isInvalid={errors.descripcion && touched.descripcion}>
//                   <FormErrorMessage>{errors.descripcion}</FormErrorMessage>
//                 </FormControl>
//               </Box>
//               <Boton
//                 as={Link}
//                 to={"/categorias"}
//                 w={["200px", "300px", "350px", "400px"]}
//                 mt={"30px"}
//                 type={"submit"}
//                 msg={"Guardar"}
//               />
//             </Box>
//           </form>
//         </Box>
//       </Center>
//       <Toaster/>
//     </Box>
//   );
// }

import { Box, Button, Select, Center, Textarea, Input } from "@chakra-ui/react";
import { Formik, Field, Form, } from "formik";
import { React, useContext, useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import * as Yup from "yup";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import Boton from "../pure/Boton";
import { toast, Toaster } from "react-hot-toast";
import axiosApi from "../../utils/config/axios.config";
import { AppContext } from "../context/AppProvider";

export default function FormularioEditarCategoria() {
  const estados = ["Activo", "Inactivo"];

  const [match, params] = useRoute("/editarCategoria/:id");
  const { token } = useContext(AppContext);
  const [datos, setDatos] = useState();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [competencias, setCompetencias] = useState()
  const [elementos, setElementos] = useState()

  console.log(params.id);
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
    // competencia: Yup.string().required("La competencia es requerida"),
    estado: Yup.string().required("El estado es requerido"),
    descripcion: Yup.string().required("La descripción es requerida"),
  });


  const obtenerCompetencias = async () =>{
    let response = await axiosApi.get("/api/competencia",{
      headers:{
        Authorization:"Bearer " + token,
      }
    }).catch((e)=>{
      toast.error("Fallo al traerlos las competencias")
    })
    setCompetencias(response.data)
    setLoading(false)
  }

  const actualizarCategoria = async (nombre, descripcion, competencia, estado, id) =>{
    let body={
      nombre:nombre,
      descripcion:descripcion,
      estado:estado,
      competencia_id:competencia,
    }

    let response = await axiosApi.put(`/api/categoria/update/${id}`,body,{
      headers: {
          Authorization: "Bearer " + token,
        },
    }).catch((e) => {
        toast.error(e.response.data.error);
      });

      if(response.status === 200){
        toast.success("¡Categoría actualizada correctamente!")
      }

      console.log(response)
  }

    // const elementosActivos = competencia && competencia.filter(item => item.estado === true);
  const getCategoriaById = async (id) => {
    let response = await axiosApi
      .get(`/api/categoria/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .catch((e) => {
        toast.error(e.response.data.error);
      });

    setDatos({
      nombre: response.data.nombre,
      descripcion: response.data.descripcion,
      estado: response.data.estado,
      competencia: response.data.competencia.id,
    });
    setLoading2(false)
  };

  useEffect(() => {
    getCategoriaById(params.id);
    obtenerCompetencias()
  }, []);

  
  


  if (loading || loading2) {
    return <div>Cargando...</div>;
  }

  return (
    <Box>
      <Center h="100%">
        <Box
          p="40px"
          borderRadius="8px"
          bgColor="white"
          minW={["150px", "250px", "480px", "550px"]}
          overflow="hidden"
        >
          <Formik
            initialValues={datos}
            validationSchema={validationSchema}
            onSubmit={({nombre, descripcion, estado, competencia})=>{
                console.log(nombre, descripcion, estado, competencia, params.id)
                actualizarCategoria(nombre, descripcion, competencia, estado, params.id)
            }}
          >
            {(props) => {
              const { errors, touched} = props;
              return (
                <Form>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    textAlign="center"
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <FormControl
                        id="nombre"
                        isInvalid={
                          errors.nombre && touched.nombre
                        }
                      >
                        <FormLabel htmlFor="nombre">Nombre</FormLabel>
                        <Field
                          as={Input}
                          mt="10px"
                          name="nombre"
                          type="text"
                          maxW={["200px", "300px", "350px", "400px"]}
                          w="400px"
                        />
                        <FormErrorMessage>
                          {errors.nombre}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Box
                      mt="20px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      w={["200px", "300px", "350px", "400px"]}
                    >
                      <FormControl
                        id="competencia"
                        isInvalid={
                          errors.competencia &&
                          touched.competencia
                        }
                      >
                        <FormLabel htmlFor="competencia">Competencia</FormLabel>
                        <Field
                          as={Select}
                          name="competencia"
                          maxW={["200px", "300px", "350px", "400px"]}
                          w="100%"
                          border="2px solid gray"
                          mt="10px"
                        >
                          {competencias ? competencias.map((item, index) => (
                            <option key={index} value={item.id}>
                              {item.nombre}
                            </option>
                          )):elementos}
                        </Field>
                        <FormErrorMessage>
                          {errors.competencia}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Box
                      mt="20px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      w={["200px", "300px", "350px", "400px"]}
                    >
                      <FormControl
                        id="estado"
                        isInvalid={
                          errors.estado && touched.estado
                        }
                      >
                        <FormLabel htmlFor="estado">Estado</FormLabel>
                        <Field
                          as={Select}
                          name="estado"
                          maxW={["200px", "300px", "350px", "400px"]}
                          w="100%"
                          border="2px solid gray"
                          mt="10px"
                        >
                          <option value="true">Activo</option>
                          <option value="false">Inactivo</option>
                        </Field>
                        <FormErrorMessage>
                          {errors.estado}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Box
                      mt="10px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <FormControl
                        id="descripcion"
                        isInvalid={
                          errors.descripcion &&
                          touched.descripcion
                        }
                      >
                        <FormLabel htmlFor="descripcion">Descripción</FormLabel>
                        <Field
                          as={Textarea}
                          mt="10px"
                          name="descripcion"
                          resize="vertical"
                          h="100px"
                          maxW={["200px", "300px", "350px", "400px"]}
                          w="400px"
                        />
                        <FormErrorMessage>
                          {errors.descripcion}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Button
                      bgColor={"principal.100"}
                      _hover={{backgroundColor:"fondo.100"}}
                      color={"white"}
                      w={["200px", "300px", "350px", "400px"]}
                      mt="30px"
                      type="submit"
                    >Guardar</Button>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Center>
      <Toaster />
    </Box>
  );
}
