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
  return (
    <Box p="20px" borderRadius="8px" bgColor="white">
      <Flex
        w={["200px","400px","500px","700px","800px"]}
        gap={["8px", "0"]}
        justifyContent={["flex-start", "space-between"]}
        overflowX="auto"
      >
        <Box 
        // maxWidth={tableWidth[1]}w
         w={"100%"}
         overflowX="auto">
          <Table w="100%">
            <Thead>
              <Tr>
                {columns.map((column, index) => (
                  <Th textAlign={"center"}
                  key={index}>{column}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item, index) => (
                <Tr key={index}>
                  {item.map((data, dataIndex) => (
                    <Td 
                      textAlign={"center"}
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