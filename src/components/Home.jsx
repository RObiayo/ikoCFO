import About from "./About";
import Achievements from "./Achievement";
import Hero from "./Hero";
import Partners from "./Partners";
import Services from "./services2";

const HomePage = () => {
    return (
    <div>
        <section id="home" className="scroll-mt-16">
            <Hero />
        </section>
        <section id="about" className="scroll-mt-16">
            <About />
        </section>
        <section id="services" className="scroll-mt-16">
            <Services />
        </section>
        <section id="achievements" className="scroll-mt-16">
            <Achievements />
        </section>
        <section id="contact" className="scroll-mt-16">
            <h1>Contact Section</h1>
        </section>
        <Partners />
    </div>
    );
};

export default HomePage;
