import Login from "./pages/Login"
import Inicio from "./pages/Inicio"
import Footer from "./components/Footer"
import {Route, Routes} from 'react-router-dom'
import './App.css'
function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Inicio />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
