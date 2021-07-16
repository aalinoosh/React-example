
import React, { createContext, useContext } from 'react'


export const DevicesContext = createContext()

export const GlobalDevices = ({children,devices}) => {
  <DevicesContext.Provider value={devices}>{children} ></DevicesContext.Provider>

}

