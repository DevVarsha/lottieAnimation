import { View, Text, AppState } from 'react-native'
import React, { useState, createContext, Dispatch } from 'react'
import Splash from './src/screens/Splash'
import Home from './src/screens/Home'

export const GlobalContext: React.Context<string> = createContext("")
export default function App():JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [color, setColor] = useState("green")

  return(
    <GlobalContext.Provider value ={{appColor: color, colorSet: setColor }}>
      {isLoading ? <Splash setIsLoading={setIsLoading}/> : <Home data={color ?? ""}/>}
    </GlobalContext.Provider>
  )
}