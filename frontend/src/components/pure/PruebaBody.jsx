import React from "react";
import TablaCustom from "./TablaCustom";
import { Center } from "@chakra-ui/react";
import { RiEdit2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import TablaPrueba from "./TablaPrueba";
export default function PruebaBody() {
  const columns = ["Nombre", "Semestre", "Competencias", "Editar", "Eliminar"];
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
      </Center>,
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
      </Center>,
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
      </Center>,
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
      </Center>,
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
      </Center>,
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
      </Center>,
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
      </Center>,
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
      </Center>,
    ],
  ];

  return (
    <TablaPrueba
      columns={columns}
      items={items}
      path={"/crearPrueba"}
      msg={"Crear Prueba"}
      showButton={true}
    />
  );
}
