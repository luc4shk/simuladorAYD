import React from "react";
import TablaCustom from "./TablaCustom";
import { RiEdit2Fill } from "react-icons/ri";
import { Center } from "@chakra-ui/react";

export default function CompetenciaBody() {
  const columns = ["Nombre", "Descripción", "Editar", "Estado"];
  const items = [
    [
      "GENÉRICAS",
      "esta competencia es de tipo genérica ",
      <Center>
        <RiEdit2Fill />
      </Center>,
      "Activo",
    ],
    [
      "ESPECÍFICAS",
      "esta competencia es de tipo específica ",
      <Center>
        <RiEdit2Fill />
      </Center>,
      "Activo",
    ],
    [
      "GENÉRICAS",
      "esta competencia es de tipo genérica ",
      <Center>
        <RiEdit2Fill />
      </Center>,
      "Activo",
    ],
  ];

  return (
      <TablaCustom columns={columns} items={items} path={"/formularioCompetencia"} msg={"Agregar Competencia"} />
  );
}
