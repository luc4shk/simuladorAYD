import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Page from './components/container/Page'

function App() {
  
  const [open, setOpen] = useState(false)
  const change = () => setOpen(!open)
  return (
   <>
   <SideBar isOpen={open}/>
   <Page changeOpen={change} isOpen={open}/>
   </> 
  )
}

export default App
