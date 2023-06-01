import React from 'react'
import TablaCustom from './TablaCustom';
import { Center } from '@chakra-ui/react';
import { RiEdit2Fill,RiDeleteBin2Fill } from "react-icons/ri";
export default function PruebaBody() {

  const columns = [
    "Nombre",
    "Semestre",
    "Competencias",
    "Editar",
    "Eliminar"
  ];
  const items = [
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
    [
      "Prueba Estudiantes Quinto Semestre",
      "5",
      "Genéricas, Específicas",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>
    ],
  ];

  return (
      <TablaCustom columns={columns} items={items} path={""} msg={"Agregar Prueba"} />
  )
}
