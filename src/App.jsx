

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';



import Partners from './components/Partners';
import Achievements from './components/Achievement';
import Services from './components/services2';
import About from './components/About';
import Hero from './components/hero';
import OurServices from './components/Services';

import HeroSection from './components/Hero2';



function App() {


  return (
<Router>
      <div className=" m-0" >
        <Header />
        <div className="scroll-mt-16">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home" className='bg-white opacity-95'>
                  <HeroSection />
                </section>
                <section id="about" className="bg-white opacity-95">
                  <About />
                </section>
                <section id="services" className="bg-white opacity-95">
                  <OurServices />
                </section>
                <section id="achievements" className="bg-white opacity-95">
                  <Achievements />
                </section>
                <section id="contact" className="bg-white opacity-95 ">
                  <Partners />
                </section>
              </>
            } />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
