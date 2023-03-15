import './App.css'
import { Routes, Route } from 'react-router-dom'

//COMPONENTS//
import Academy from './components/Pages/Academy'
import HomePage from './components/Pages/Home'
import Courses from './components/Pages/Courses'
import About from './components/Pages/About'
import ComingSoon from './components/Pages/ComingSoon'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='academy' element={<Academy />} />
      <Route path='comingsoon' element={<ComingSoon />} />
      <Route path='courses' element={<Courses />} />
      <Route path='about' element={<About />} />
    </Routes>
  )
}

export default App
