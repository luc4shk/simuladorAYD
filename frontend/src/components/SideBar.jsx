import React, { useState } from 'react'
import {Flex, Box} from "@chakra-ui/react"
import SideItem from './pure/SideItem'
import { AiOutlineFlag,
         AiOutlineHome,
         AiOutlineAppstore, 
         AiOutlineCalendar, 
         AiOutlineTeam,
         AiOutlineFileAdd,
         AiOutlineBook } from 'react-icons/ai';

import {BiLogOut} from "react-icons/bi"
export default function SideBar({isOpen}) {

  const navItems = [
    {icon:AiOutlineHome,msg:"Panel Principal",active:false},
    {icon:AiOutlineFlag,msg:"Competencias",active:false},
    {icon:AiOutlineAppstore,msg:"Categorías",active:false},
    {icon:AiOutlineCalendar,msg:"Preguntas",active:false},
    {icon:AiOutlineTeam,msg:"Estudiantes",active:false},
    {icon:AiOutlineFileAdd,msg:"Prueba",active:false},
    {icon:AiOutlineBook,msg:"Convocatoria",active:false},
  ]


  const [items, setItems] = useState(navItems)

  function seleccion(index){
    const newItems = [...items]
    newItems.map((item,i)=>{
      if(i == index){
        item.active = true;
      }else{
        item.active = false;
      
      }
    })
    setItems(newItems)
  }

  return (
    <>
        <Flex 
        boxSizing='border-box'
        direction={"column"}
        position={"absolute"}
        w={"200px"}
        h={"100%"}
        alignItems={"center"}
        backgroundColor={"white"}
        padding={"15px"}
        justifyContent={"space-between"}
        transform={ isOpen ? "translateX(-100%)" : "translateX(0px)"}
        transition={"all 0.5s"}
        overflow={"hidden"}
        
        >
        <Flex
          direction={"column"}
          width={"100%"}
          gap={"15px"} 
        >

        {
          items.map( ({icon, msg, active}, i) => <SideItem icon={icon} funcion={seleccion} active={active} msg={msg} index={i}/> ) 
        }
        </Flex>
        <SideItem icon={BiLogOut} msg={"Cerrar Sesión"}></SideItem>
        </Flex>
    </>
  )
}
