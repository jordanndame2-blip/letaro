import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Resevation from './pages/Resevation'
import Menu from './pages/Menu'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      {/* HomePage */}
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/reservation' element={<Resevation/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
    </>
  )
}

export default App
