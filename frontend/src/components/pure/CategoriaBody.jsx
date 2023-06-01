import React from "react";
import TablaCustom from "./TablaCustom";
import { RiEdit2Fill } from "react-icons/ri";
import { Center } from "@chakra-ui/react";

export default function CategoriaBody() {
  const columns = [
    "Categoría",
    "No. de preguntas",
    "Estado",
    "Competencia",
    "Editar",
  ];
  const items = [
    [
      "INGLÉS",
      "20",
      "Activo",
      "GENÉRICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "ANÁLISIS Y DISEÑO",
      "30",
      "Activo",
      "ESPECÍFICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "LECTURA CRÍTICA",
      "15",
      "Activo",
      "GENÉRICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "FORMULACIÓN DE PROYECTOS",
      "32",
      "Activo",
      "ESPECÍFICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "INGLÉS",
      "20",
      "Activo",
      "GENÉRICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "ANÁLISIS Y DISEÑO",
      "30",
      "Activo",
      "ESPECÍFICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "LECTURA CRÍTICA",
      "15",
      "Activo",
      "GENÉRICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
    [
      "FORMULACIÓN DE PROYECTOS",
      "32",
      "Activo",
      "ESPECÍFICA", //aqui se deberia extraer de la entidad competencia!!!
      <Center>
        <RiEdit2Fill />
      </Center>,
    ],
  ];
  return (
    <TablaCustom columns={columns} items={items} path={"/formularioCategoria"} msg={"Agregar Categoria"} />
  );
}
