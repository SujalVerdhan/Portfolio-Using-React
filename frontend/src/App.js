
import './App.css';
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Experience from './components/experience/experience';
import Header from './components/header/header';
import Nav from './components/navbar/navbar';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/fooetr';
import Service from "./components/Services/service"

import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Toaster } from "react-hot-toast";
import { Form } from './pages/form';
import { useAuthContext } from './context/authContext';
import { Update } from './pages/Update';
function App() {
  const {authUser}=useAuthContext()
  return (
    <>
<Toaster/>
<Routes>


  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={authUser?<Navigate to="/"/>:<Login/>}/>
  <Route path="/form" element={authUser?<Form/>:<Navigate to="/login"/>}/>
  <Route path="/update/:id" element={authUser?<Update/>:<Navigate to="/login"/>}/>
</Routes>

     
    </>
  );
}

export default App;
