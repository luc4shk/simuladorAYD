import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

export default function TablaCustom({ columns, items }) {
  const [w] = useMediaQuery("(min-width: 1000px)");
  const [w2] = useMediaQuery("(min-width: 950px)");
  const [w3] = useMediaQuery("(min-width: 850px)");
  const [w4] = useMediaQuery("(min-width: 630px)");
  const [w5] = useMediaQuery("(min-width: 530px)");
  const [w6] = useMediaQuery("(min-width: 480px)");
  const [w7] = useMediaQuery("(min-width: 380px)");

  let tableWidth;

  switch (true) {
    case w:
      tableWidth = ["100%", "750px"];
      break;
    case w2:
      tableWidth = ["100%", "700px"];
      break;
    case w3:
      tableWidth = ["100%", "600px"];
      break;
    case w4:
      tableWidth = ["100%", "500px"];
      break;
    case w5:
      tableWidth = ["100%", "400px"];
      break;
    case w6:
      tableWidth = ["100%", "300px"];
      break;
    case w7:
      tableWidth = ["100%", "250px"];
      break;
    default:
      tableWidth = ["100%", "150px"];
      break;
  }

  return (
    <Box p="20px" borderRadius="8px" bgColor="white">
      <Flex
        w={tableWidth}
        gap={["8px", "0"]}
        justifyContent={["flex-start", "space-between"]}
        overflowX="auto"
      >
        <Box maxWidth={tableWidth[1]} overflowX="auto">
          <Table w="100%">
            <Thead>
              <Tr>
                {columns.map((column, index) => (
                  <Th key={index}>{column}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item, index) => (
                <Tr key={index}>
                  {item.map((data, dataIndex) => (
                    <Td
                      key={dataIndex}
                      isNumeric={typeof data === "number"}
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {data}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}