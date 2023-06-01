import React from 'react'
import TablaCustom from './TablaCustom';
import { Center } from '@chakra-ui/react';
import { RiEdit2Fill, RiDeleteBin2Fill} from "react-icons/ri";

export default function EstudianteBody() {
  const columns = [
    "Nombres",
    "Apellidos",
    "Correo",
    "Semestre",
    "Código",
    "Editar",
    "Eliminar"
  ];
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
      <Center>
      <RiDeleteBin2Fill />
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
      <Center>
      <RiDeleteBin2Fill />
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
      <Center>
      <RiDeleteBin2Fill />
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
      <Center>
      <RiDeleteBin2Fill />
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
      <Center>
      <RiDeleteBin2Fill />
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
      <Center>
      <RiDeleteBin2Fill />
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
      <Center>
      <RiDeleteBin2Fill />
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
      <Center>
      <RiDeleteBin2Fill />
    </Center>,
    ],
  ];
  return (
      <TablaCustom columns={columns} items={items} path={""} msg={"Agregar Pregunta"} />
    )
}
