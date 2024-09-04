
import './App.css'
import Layout from './components/Layout/Layout'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Registerpage from './components/Registerpage'
import axios from 'axios'
axios.defaults.baseURL="http://localhost:4000"
import Destinations from './components/Destinations'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Service from './components/Service'
import ContactUs from './components/ContatctUs'

function App() {

  return (
    <>
<Routes>

  <Route  element={<Layout/>}>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/register' element={<Registerpage/>}/>
  <Route path='/aboutUs' element={<AboutUs/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/contactUs' element={<ContactUs/>}/>


  
  </Route>
  
  </Routes>  


  
    </>
  )
}

export default App
