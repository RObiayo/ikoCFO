import About from "./About";
import Achievements from "./Achievement";
import Hero from "./Hero";
import Partners from "./Partners";
import Services from "./services2";

const HomePage = () => {
    return (
    <div className="bg-[url('/Board1.jpg')] bg-fixed bg-cover bg-center">
        <section id="home" className="scroll-mt-16">
            <Hero />
        </section>
        <section id="about" className="scroll-mt-16 bg-theme-gradient opacity-85">
            <About />
        </section>
        <section id="services" className="scroll-mt-16 bg-theme-gradient opacity-85" >
            <Services />
        </section>
        <section id="achievements" className="scroll-mt-16 bg-theme-gradient opacity-85">
            <Achievements />
        </section>
        <section id="contact" className="scroll-mt-16 bg-theme-gradient opacity-85 border border-1 border-collapse">
        <Partners />
        </section>

    </div>
    );
};

export default HomePage;
