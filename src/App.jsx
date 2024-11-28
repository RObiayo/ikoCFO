

import About from './components/About';
import Achievements from './components/Achievement';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/services2';

function App() {


  return (
    <>
    
    <Header />
    <Hero />
    <div className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 my-8"></div>
    <About />
    <Services />
    <div className="h-px bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 my-8"></div>
    <Achievements />
    <Footer />
    </>
  )
}

export default App
