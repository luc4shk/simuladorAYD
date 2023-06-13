import React,{useContext, useEffect, useState} from 'react'
import TablaEstudiante from './TablaEstudiantes';
import { Center } from '@chakra-ui/react';
import { RiEdit2Fill, RiDeleteBin2Fill} from "react-icons/ri";
import axiosApi from "../../utils/config/axios.config";
import { AppContext } from "../context/AppProvider";
import { toast } from 'react-hot-toast';
export default function EstudianteBody() {
  const {token} = useContext(AppContext)
  const [estudiantes, setEstudiantes] = useState()
  const columns = [ "Nombres",
    "Apellidos",
    "Correo",
    "Estado",
    "Semestre",
    "Código",
    "Editar",
  ];

  const obtenerEstudiantes = async ( ) =>{
    let response = await axiosApi.get("/api/user/student",{
      headers:{
        Authorization:"Bearer " + token,
      }
    }).catch((e)=>{
        toast.error(e.response.data.error)
     })
     setEstudiantes(response.data)
  }

 useEffect(()=>{
  obtenerEstudiantes()
 },[]) 

  const items = [
    [
      "Jennifer Dayana",
      "Salazar Rodriguez",
      "jenniferdayanasalazar@gmail.com",
      "6", //aqui se deberia extraer de la entidad competencia!!!
      "1152090",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "Samuel Omar",
      "Boada Barrera",
      "samuelomarboada@gmail.com",
      "7", //aqui se deberia extraer de la entidad competencia!!!
      "1152015",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "Luis Carlos",
      "Ascencio Quintero",
      "luiscarlosascencio@gmail.com",
      "7", //aqui se deberia extraer de la entidad competencia!!!
      "1152019",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "Jaider Gustavo",
      "Oliveros Moros",
      "jaidergustavooliveros@gmail.com",
      "7", //aqui se deberia extraer de la entidad competencia!!!
      "1152031",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "Jennifer Dayana",
      "Salazar Rodriguez",
      "jenniferdayanasalazar@gmail.com",
      "6", //aqui se deberia extraer de la entidad competencia!!!
      "1152090",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "Samuel Omar",
      "Boada Barrera",
      "samuelomarboada@gmail.com",
      "7", //aqui se deberia extraer de la entidad competencia!!!
      "1152015",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "Luis Carlos",
      "Ascencio Quintero",
      "luiscarlosascencio@gmail.com",
      "7", //aqui se deberia extraer de la entidad competencia!!!
      "1152019",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "Jaider Gustavo",
      "Oliveros Moros",
      "jaidergustavooliveros@gmail.com",
      "7", //aqui se deberia extraer de la entidad competencia!!!
      "1152031",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
  ];

  if(!estudiantes){
    return <div>Cargando...</div>
  }

  return (
      <TablaEstudiante columns={columns} items={estudiantes} path={""} msg={"Agregar Pregunta"} />
    )
}
