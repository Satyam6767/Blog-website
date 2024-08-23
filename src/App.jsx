
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogpostpage from './pages/Blogpostpage'

function App() {


  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog/:id' element = {<Blogpostpage />} />
      </Routes>
    </Router>
   

    </>
  )
}

export default App



