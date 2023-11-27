
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
function App() {
  return (
    <div className="App">
       <Header/>
       <Nav/>
     <About/>
     <Experience/>
     <Service/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
