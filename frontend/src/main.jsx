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
  styles: {
    global: {
      '::-webkit-scrollbar': {
        width: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#cecece',
        borderRadius: '8px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'gray.400',
      },
      '::-webkit-scrollbar-track': {
        background: '#f0f0f0',
        borderRadius: '8px',
      },
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
   <ChakraProvider theme={theme}>
    <App />
    </ChakraProvider> 
  </React.StrictMode>,
)
