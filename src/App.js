import Navbarr from "./components/Navbar";
import Hero from './components/Hero';
import Services from "./components/Services";
import Featured from "./components/Featured";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

// import Login from './pages/Login';

import '../src/css/main.css';
import '../src/js/main';
// import Home from './pages/Home';
// import About from './pages/About';

const App = () => {
  return <div>
    {/* <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router> */}
    <Navbarr></Navbarr>
    <Hero></Hero>
    <Services></Services>
    <Featured></Featured>
    <Project></Project>
    <Testimonial></Testimonial>
    <Footer></Footer>

  </div>
}

export default App;
