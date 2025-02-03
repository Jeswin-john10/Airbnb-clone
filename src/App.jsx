import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Itemheader from './Components/Itemheader'
import Homepage from './pages/Homepage'
import { Search } from './Components/Search'
import Map from './Components/Map'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
    <Search/>
   <Itemheader/>
   <Homepage/>
   <Routes>
  <Route path='/Map' element={<Map/>}/>
</Routes>
   <Footer/>
    </>
  )
}

export default App
