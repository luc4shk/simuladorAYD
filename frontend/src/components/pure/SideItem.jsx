import { Button, Flex, Icon, Link, Select, Text } from '@chakra-ui/react'
import React from 'react'

export default function SideItem({icon, msg, active, index, funcion}) {
  return (
    <>
    <Link
        onClick={()=>{
            funcion(index)
        }}
        w={'100%'}
        borderRadius={"8px"}
        _hover={{backgroundColor: "#F4F4F4"}}
    >
        <Flex w={"100%"} gap={"15px"} p={"10px"}  justifyContent={'flex-start'} alignItems={"flex-start"}>
            <Icon as={icon} color={active ? "principal.100" : null } fontSize="25px"/>
            <Text>{msg}</Text>
        </Flex>
    
    </Link>
    </>
    )
}
