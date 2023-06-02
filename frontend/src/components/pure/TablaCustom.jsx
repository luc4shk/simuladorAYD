import React, { useState } from "react";
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
import Boton from "../pure/Boton"
import { MdAdd, MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function TablaCustom({ columns, items, path, msg, showButton }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (selected) => {
    setCurrentPage(selected);
  };

  const atrasPage = () =>{
    handlePageChange(currentPage - 1)
  }

  const adelantePage = () =>{
    handlePageChange(currentPage + 1)
  }


  

  return (
    <div>
      {showButton && (
       <Boton
        msg={
          msg
        }
        leftIcon={<MdAdd/>}
        as={"link"}
        path={path}
        w={["100%", "250px"]}
        radius={"8px"}
      /> 
      )}
      <Box mb="15px" mt="20px" p="20px" borderRadius="8px" bgColor="white">
        <Flex
          w={["190px", "350px", "510px", "700px"]}
          gap={["8px", "0"]}
          direction={["column", "row"]}
          justifyContent={["flex-start", "space-between"]}
          alignItems="center"
          overflowX="auto"
        >
          <Box w="100%" overflowX="auto" mb={4}>
            <Table w="100%">
              <Thead>
                <Tr>
                  {columns.map((column, index) => (
                    <Th textAlign="center" key={index}>
                      {column}
                    </Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {currentItems.map((item, index) => (
                  <Tr key={index}>
                    {item.map((data, dataIndex) => (
                      <Td
                        textAlign="center"
                        key={dataIndex}
                        isNumeric={typeof data === "number"}
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "200px",
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
      <div
        className="pagination"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* <Button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          bgColor="principal.100"
          textColor="white"
          w="30px"
          border="1px solid white"
          alignItems="center"
          borderRadius="18px"
        >
          <Icon as={MdChevronLeft} boxSize={5} />
        </Button> */}
        <Boton
          isDisabled={currentPage===0}
          funcion={atrasPage}
          w={"30px"}
          radius={"50%"}
          msg={<Icon as={MdChevronLeft} boxSize={5} />}
        />
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index)}
            bgColor={currentPage === index ? "gray.200" : "principal.100"}
            textColor={currentPage === index ? "black" : "white"}
            _hover={
              {
                bgColor: currentPage===index ? "#F0847D" : "gray.300" 
              }
            }
            w="30px"
            alignItems="center"
            border="1px solid white"
          >
            {index + 1}
          </Button>
        ))}
        {/* <Button
          disabled={currentPage === totalPages - 1}
          onClick={() => handlePageChange(currentPage + 1)}
          bgColor="principal.100"
          textColor="white"
          w="30px"
          border="1px solid white"
          alignItems="center"
          borderRadius="18px"
        >
        
          <Icon as={MdChevronRight} boxSize={5} />
        </Button> */}
        <Boton 
          isDisabled={currentPage === totalPages - 1}
          funcion={adelantePage}
          w={"30px"}
          radius={"50%"}
          msg={<Icon as={MdChevronRight} boxSize={5} />}
        />
      </div>
    </div>
  );
}
