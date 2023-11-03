import { useState } from 'react'
import { MainPageAdmin } from './components/pages/MainPageAdmin'
import { MainPageDefault } from './components/pages/MainPageDefault'



function App() {
  const [isAdmin, setIsAdmin] = useState(0)

  return (
    <>
      {isAdmin === 1 ? <MainPageAdmin/> : <MainPageDefault/>}
    </>
  )
}

export default App
