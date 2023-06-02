import React from "react";
import TablaCustom from "./TablaCustom";
import { Center } from "@chakra-ui/react";
import { RiEdit2Fill, RiDeleteBin2Fill, RiEyeFill } from "react-icons/ri";

export default function ConvocatoriaBody() {
  const columns = [
    "Nombre",
    "Estado",
    "Fecha de Inicio",
    "Fecha de Finalización",
    "Editar",
    "Estudiantes",
    "Resultados",
  ];
  const items = [
    [
      "0",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "0",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "0",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "0",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "0",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "1",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "1",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "1",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "1",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "1",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "2",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "2",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "2",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "2",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "2",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "3",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "3",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "3",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "3",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "3",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "4",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "4",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "4",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "4",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "4",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "5",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "5",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "5",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "5",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "5",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "6",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "6",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "6",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "6",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "6",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "7",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "7",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "7",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "7",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "7",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
    [
      "8",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "8",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "8",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],[
      "8",
      "Activo",
      "10/05/23",
      "15/06/23",
      <Center>
        <RiEdit2Fill />
      </Center>,
      <Center>
        <RiDeleteBin2Fill />
      </Center>,
      <Center>
        <RiEyeFill />
      </Center>,
    ],
  ];

  return (
    <TablaCustom
      columns={columns}
      items={items}
      path={""}
      msg={"Agregar Convocatoria"}
      showButton={true}
    />
  );
}
