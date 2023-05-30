import {React, createContext, useState} from 'react'

export const AppContext = createContext();

export function AppProvider({children}) {

  const [open, setOpen] = useState(false);
  const change = () => setOpen(!open);

  return (
    <AppContext.Provider value={{open,change}}>
      {children}
    </AppContext.Provider>
  )
}
