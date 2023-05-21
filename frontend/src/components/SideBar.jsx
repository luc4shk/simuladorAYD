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
        direction={"column"}
        position={"fixed"}
        width={"200px"}
        minHeight={"100%"}
        alignItems={"center"}
        backgroundColor={"white"}
        padding={"15px"}
        gap={"15px"}
        transform={ isOpen ? "translateX(-100%)" : "translateX(0px)"}
        transition={"all 0.5s"}
        
        >
        {
          items.map( ({icon, msg, active}, i) => <SideItem icon={icon} funcion={seleccion} active={active} msg={msg} index={i}/> ) 
        }
        </Flex>
    </>
  )
}
