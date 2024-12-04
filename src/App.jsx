

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';



import Partners from './components/Partners';
import Achievements from './components/Achievement';
import Services from './components/services2';
import About from './components/About';
import Hero from './components/hero';



function App() {


  return (
<Router>
      <div className="bg-[url('/Board1.jpg')] bg-fixed bg-cover bg-center">
        <Header />
        <div className="scroll-mt-16">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Hero />
                </section>
                <section id="about" className="bg-theme-gradient opacity-85">
                  <About />
                </section>
                <section id="services" className="bg-theme-gradient opacity-85">
                  <Services />
                </section>
                <section id="achievements" className="bg-theme-gradient opacity-85">
                  <Achievements />
                </section>
                <section id="contact" className="bg-theme-gradient opacity-85 ">
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
