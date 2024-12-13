

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';




import Achievements from './components/Achievement';

import About from './components/About';

import OurServices from './components/Services';

import HeroSection from './components/Hero2';
import TeamSection from './components/Team';




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
                  <TeamSection />

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
