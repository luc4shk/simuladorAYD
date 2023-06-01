import React from "react";
import TablaCustom from "./TablaCustom";
import { RiEdit2Fill } from "react-icons/ri";
import { Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {Link} from "wouter"

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
    <div>
      <Button
        as={Link}
        to="/formularioCompetencia"
        bgColor={"principal.100"}
        textColor={"white"}
        w={["100%", "170px"]}
      >
        Cambiar Contraseña
      </Button>
      <TablaCustom columns={columns} items={items} />
    </div>
  );
}
