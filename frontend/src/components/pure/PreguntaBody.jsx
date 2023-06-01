import React from 'react'
import TablaCustom from './TablaCustom';
import { Center } from '@chakra-ui/react';
import { RiEdit2Fill } from "react-icons/ri";
export default function PreguntaBody() {
   const columns = [
    "Enunciado",
    "Semestre",
    "Estado",
    "Tipo",
    "Categoria",
    "Editar"
  ];
  const items = [
    [
      "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
     "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "¿Qué significa la palabra Software?",
      "2",
      "Activo",
      "Simple", //aqui se deberia extraer de la entidad competencia!!!
      "Ingles",
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
  ];
  return (
      <TablaCustom columns={columns} items={items} path={""} msg={"Agregar Pregunta"} />
    )
}
