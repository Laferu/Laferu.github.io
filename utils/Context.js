import React, { useState, useEffect, createContext } from 'react'
import { ThemeProvider } from 'styled-components'

export const GlobalContext = createContext()

import projectsJson from './projects.json'

export const GlobalProvider = ({ children }) => {
  const [projects] = useState(projectsJson)
  // const [sidebarToggle, setSidebarToggle] = useState(false)
  // const [drawerWidth, setDrawerWidth] = useState(240)
  // const themeTemp = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: '#222'
  //     }
  //   }
  // })
  const theme = {}
  // console.log(theme)

  return (
    <GlobalContext.Provider value={{
      // state: {
      //   projects
      // },
      data: {
        projects
      },
      url: {
        baseUrl: ''
      }
    }}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}
