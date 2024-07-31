import React from 'react'
import Navigation from '../Navigation/Navigation'
import ThemeContextProvider from '../Components/Context/ThemeContextProvider'
export default function MyApp() {
  return (
    <ThemeContextProvider>
      <Navigation />
    </ThemeContextProvider>
  )
}
