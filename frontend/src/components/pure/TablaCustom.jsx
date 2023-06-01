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
  Button,
  Icon,
} from "@chakra-ui/react";
import { Link } from "wouter";
import { MdAdd } from "react-icons/md";

export default function TablaCustom({ columns, items, path, msg }) {
  return (
    <>
      <Button
        as={Link}
        to={path}
        bgColor={"principal.100"}
        textColor={"white"}
        w={["100%", "250px"]}
        display="flex"
        alignItems="center"
        borderRadius={"18px"}
      >
        <Flex  marginRight="0.5rem">
        <Icon ml={["1px", "0px"]} color="white" as={MdAdd} boxSize={5}/>
        </Flex>
        {msg}
      </Button>
      <Box mt={"20px"} p="20px" borderRadius="8px" bgColor="white">
        <Flex
          w={["200px", "350px", "510px", "700px"]}
          gap={["8px", "0"]}
          justifyContent={["flex-start", "space-between"]}
          overflowX="auto"
        >
          <Box
            w={"100%"}
            overflowX="auto"
          >
            <Table w="100%">
              <Thead>
                <Tr>
                  {columns.map((column, index) => (
                    <Th textAlign={"center"} key={index}>
                      {column}
                    </Th>
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
    </>
  );
}
