import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    principal: {
     100: "#fb8b83" 
    },
    secundario:{
      100: "#ececec"
    },
    selectOption:{
      100:"#f4f4f4"
    }
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
   <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider> 
  </React.StrictMode>,
)
