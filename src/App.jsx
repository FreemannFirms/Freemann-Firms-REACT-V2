import './App.css'
import { Routes, Route } from 'react-router-dom'

//COMPONENTS//
import Academy from './components/Pages/Academy'
import HomePage from './components/Pages/Home'
import Invest from './components/Pages/Invest'
import Courses from './components/Pages/Courses'
import About from './components/Pages/About'


function App() {

  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='academy' element={<Academy />} />
        {/* <Route path='invest' element={<Invest />} />
        <Route path='trade' element={<Trade />} />
        <Route path='marketplace' element={<Marketplace />} /> */}
        <Route path='courses' element={<Courses />} />
        <Route path='about' element={<About />} />
      </Routes>
  )
}

export default App
