// import { Box, Button, Select, Center, Input, Textarea } from "@chakra-ui/react";
// import { useFormik } from "formik";
// import React, { useEffect, useContext } from "react";
// import { useRoute } from "wouter";
// import { AppContext } from "../context/AppProvider";
// import Boton from "../pure/Boton";
// import axiosApi from "../../utils/config/axios.config";
// import { toast, Toaster } from "react-hot-toast";

// export default function FormularioEditarCompetencia() {

//   const [match, params] = useRoute('/editarCompetencia/:id');
//   const {token} = useContext(AppContext)

//   const obtenerCompetenciaPorId = async (id) =>{
//     let response = await axiosApi.get(`api/competencia/${id}`,{
//       headers:{
//         Authorization:"Bearer " + token,
//       }
//     }).catch((e)=>{
//       toast.error("Error al traer los datos de la competencia")
//     })
//     console.log(response.data)
//   }

//   useEffect(()=>{
//     obtenerCompetenciaPorId(params.id)
//   },[])
//   const estados = ["Activo", "Inactivo"];
//   const formik = useFormik({
//     initialValues: {
//       nombre: "",
//       descripcion: "",
//     },
//     validate: (values) => {
//       const errors = {};

//       if (!values.nombre) {
//         errors.nombre = "El nombre es requerido";
//       }

//       if (!values.descripcion) {
//         errors.descripcion = "La descripción es requerida";
//       }

//       return errors;
//     },
//     onSubmit: (values) => {
//       // Lógica para enviar el formulario
//       console.log(values);
//     },
//   });

//   return (
//     <Box position="fixed">
//       <Center h="100%">
//         <Box
//           p="40px"
//           borderRadius="8px"
//           bgColor="white"
//           minW={["150px", "250px", "480px", "550px"]}
//           overflow="hidden"
//         >
//           <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             textAlign="center"
//           >
//             <Box display="flex" flexDirection="column" justifyContent="center">
//               <label htmlFor="nombre">Nombre</label>
//               <Input
//                 mt="10px"
//                 id="nombre"
//                 name="nombre"
//                 type="text"
//                 maxW={["200px", "300px", "350px", "400px"]}
//                 w="400px"
//                 value={formik.values.nombre}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.nombre && formik.errors.nombre && (
//                 <span style={{ color: "red" }}>{formik.errors.nombre}</span>
//               )}
//             </Box>
//             <Box
//               mt="20px"
//               display="flex"
//               flexDirection="column"
//               justifyContent="center"
//               w={["200px", "300px", "350px", "400px"]}
//             >
//               <label htmlFor="estado">Estado</label>
//               <Select
//                 id="estado"
//                 name="estado"
//                 maxW={["200px", "300px", "350px", "400px"]}
//                 w="100%"
//                 border="2px solid gray"
//                 mt={"10px"}
//               >
//                 {estados.map((estado, index) => (
//                   <option key={index} value={estado}>
//                     {estado}
//                   </option>
//                 ))}
//               </Select>
//             </Box>
//             <Box
//               mt="10px"
//               display="flex"
//               flexDirection="column"
//               justifyContent="center"
//             >
//               <label htmlFor="descripcion">Descripción</label>
//               <Textarea
//                 mt="10px"
//                 id="descripcion"
//                 name="descripcion"
//                 resize="none"
//                 h="180px"
//                 maxW={["200px", "300px", "350px", "400px"]}
//                 w="400px"
//                 value={formik.values.descripcion}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//               />
//               {formik.touched.descripcion && formik.errors.descripcion && (
//                 <span style={{ color: "red" }}>
//                   {formik.errors.descripcion}
//                 </span>
//               )}
//             </Box>
//             <Boton
//               as={"link"}
//               path={"/competencias"}
//               w={["200px", "300px", "350px", "400px"]}
//               mt={"30px"}
//               type={"submit"}
//               msg={"Guardar"}
//             />
//           </Box>
//         </Box>
//       </Center>
//     </Box>
//   );
// }

import { Box, Button, Select, Center, Input, Textarea, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import React, { useEffect, useContext, useState } from "react";
import { useRoute } from "wouter";
import { AppContext } from "../context/AppProvider";
import Boton from "../pure/Boton";
import axiosApi from "../../utils/config/axios.config";
import { toast, Toaster } from "react-hot-toast";

export default function FormularioEditarCompetencia() {
  const [match, params] = useRoute('/editarCompetencia/:id');
  const { token } = useContext(AppContext);
  const [datos,setDatos] = useState()
  const [loading, setLoading] = useState(true)

  const actualizarCompetencia = async (nombre, descripcion, estado, id) =>{
    let body={
      nombre:nombre,
      descripcion:descripcion,
      estado:estado
    }
    let response = await axiosApi.put(`api/competencia/update/${id}`,body,{
      headers: {
        Authorization: "Bearer " + token,
      },
    }).catch((e) => {
      toast.error(e.response.data.error);
    });

    if(response.status === 200){
      toast.success("¡Competencia actualizada!")
    }

    console.log(response)
  }

  const obtenerCompetenciaPorId = async (id) => {
    let response = await axiosApi.get(`api/competencia/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).catch((e) => {
      toast.error("Error al traer los datos de la competencia");
    });
    console.log(response.data);
    setDatos({
      nombre:response.data.nombre,
      estado:response.data.estado,
      descripcion:response.data.descripcion

    })
    setLoading(false)
  };

  useEffect(() => {
    obtenerCompetenciaPorId(params.id);
  }, []);

  const estados = ["Activo", "Inactivo"];

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido").max(25,"Maximo 25 caracteres").min(5,"Mínimo 5 caracteres"),
    estado: Yup.boolean().required("El estado es requerido"),
    descripcion: Yup.string().required("La descripción es requerida").max(200,"Maximo 200 caracteres").min(10,"Mínimo 10 caracteres"),
  });



  const handleSubmit = (values) => {
    // Lógica para enviar el formulario
    console.log(values);
  };

  if(loading){
    return <div>Cargando...</div>
  }

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
          <Formik
            initialValues={datos}
            validationSchema={validationSchema}
            onSubmit={({nombre, descripcion, estado})=>{
              const estadoValue = estado === "true" ? true : false;
              console.log(nombre, descripcion, estadoValue);
              actualizarCompetencia(nombre, descripcion, estadoValue, params.id);
            }}
          >
            {
              (props)=>{

              const {errors, touched} = props
              return(
                <Form>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                textAlign="center"
              >
                <Box >
                  <FormControl display="flex" flexDirection="column" justifyContent="center" isInvalid={errors.nombre && touched.nombre} >
                  <label htmlFor="nombre">Nombre</label>
                  <Field name="nombre"
                          as={Input}
                          mt="10px"
                          id="nombre"
                          type="text"
                          maxW={["200px", "300px", "350px", "400px"]}
                          w="400px"
                          />
                        <FormErrorMessage>{errors.nombre}</FormErrorMessage>
                      </FormControl>
                </Box>
                <Box
                  mt="20px"
                  w={["200px", "300px", "350px", "400px"]}
                >
                  <FormControl display="flex" flexDirection="column" justifyContent="center" isInvalid={errors.estado && touched.estado} >
                  <Field name="estado"
                          as={Select}
                          mt="10px"
                          id="estado"
                          type="text"
                          maxW={["200px", "300px", "350px", "400px"]}
                          w="400px"
                          >
                            <option value={"true"}>Activo</option>
                            <option value={"false"}>Inactivo</option>
                          </Field>
                        <FormErrorMessage>{errors.estado}</FormErrorMessage>
                      </FormControl>
                </Box>
                <Box
                  mt="10px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                 <FormControl display="flex" flexDirection="column" justifyContent="center" isInvalid={errors.descripcion && touched.descripcion} >
                  <label htmlFor="descripcion">Descripción</label>
                  <Field name="descripcion"
                          as={Textarea}
                          mt="10px"
                          id="descripcion"
                          type="text"
                          maxW={["200px", "300px", "350px", "400px"]}
                          w="400px"
                          h={"150px"}
                          />
                        <FormErrorMessage>{errors.descripcion}</FormErrorMessage>
                      </FormControl>
                  
                </Box>
                <Button
                  w={["200px", "300px", "350px", "400px"]}
                  mt={"30px"}
                  type="submit"
                >Guardar</Button>
              </Box>
            </Form>
              )
            }}
            
          </Formik>
        </Box>
      </Center>
      <Toaster/>
    </Box>
  );
}
