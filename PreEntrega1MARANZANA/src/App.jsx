import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "Mis productos"/>
    </>
  )
}

export default App