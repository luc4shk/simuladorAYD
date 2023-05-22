import { useEffect, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Page from './components/container/Page'
import Login from './components/forms/Login'

function App() {
  
  const [open, setOpen] = useState(false)
  const change = () => setOpen(!open)
  return (
   <>
   <Login/>
   {/* <SideBar isOpen={open}/>
   <Page changeOpen={change} isOpen={open}/> */}
   </> 
  )
}

export default App
