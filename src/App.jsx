import './App.css'
import { Routes, Route } from 'react-router-dom'

//COMPONENTS//
import Academy from './components/Pages/Academy'
import HomePage from './components/Pages/Home'
import Courses from './components/Pages/Courses'
import About from './components/Pages/About'
import ComingSoon from './components/Pages/ComingSoon'
import Forex from './components/Pages/Forex'
import Crypto from './components/Pages/Crypto'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='academy' element={<Academy />} />
      <Route path='comingsoon' element={<ComingSoon />} />
      <Route path='courses' element={<Courses />} />
      <Route path='about' element={<About />} />
      <Route path='courses/forex' element={<Forex />} />
      <Route path='courses/crypto' element={<Crypto />} />
    </Routes>
  )
}

export default App
