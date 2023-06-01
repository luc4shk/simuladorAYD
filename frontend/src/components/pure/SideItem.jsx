import { Button, Flex, Icon, Select, Text } from '@chakra-ui/react'
import { useLocation, Link} from 'wouter'
import React, { useState, useEffect } from 'react'

export default function SideItem({icon, msg, active, index, tamanio, path}) {
    
     const [ruta, setRuta] = useState(path)
     const [loc, setLoc] = useLocation()
    return (
    <>
    <Button
        as={Link} 
        to={ruta !== undefined && ruta}
        w={'100%'}
        borderRadius={"8px"}
        _hover={{
            backgroundColor: "#F4F4F4",
            textDecoration:"none"
        }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        variant={'unstyled'}
        fontWeight={"semibold"}
        
    >
        <Flex  w={"100%"} gap={"15px"} p={"10px"}  justifyContent={tamanio ? 'flex-start' : 'center'} alignItems={"center"}>
            <Icon as={icon} color={ loc==ruta ? "principal.100" : null } fontSize="25px"/>
            {msg!="" ? <Text>{msg}</Text> : msg}
        </Flex>
    
    </Button>
    </>
    )
}

