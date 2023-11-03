import { useState } from 'react'
import { MainPageAdmin } from './components/pages/MainPageAdmin'
import { MainPageDefault } from './components/pages/MainPageDefault'
import { Header } from './components/pages/Header'


function App() {
  const [isAdmin, setIsAdmin] = useState(0)

  return (
    <>
      <Header/>
      {isAdmin === 1 ? <MainPageAdmin/> : <MainPageDefault/>}
      
    </>
  )
}

export default App
