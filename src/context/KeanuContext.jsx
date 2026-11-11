import { createContext, useContext, useState } from 'react'

const KeanuContext = createContext(null)

export function KeanuProvider({ children }) {
  const [isKeanuMode, setIsKeanuMode] = useState(false)
  return (
    <KeanuContext.Provider value={{ isKeanuMode, setIsKeanuMode }}>
      {children}
    </KeanuContext.Provider>
  )
}

export function useKeanu() {
  return useContext(KeanuContext)
}
