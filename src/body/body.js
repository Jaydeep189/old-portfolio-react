import Intro from "../components/intro";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Services from "../components/services";
import Stats from "../components/stats";
import Contact from "../components/contact";

export default function Body(){
    return (
        <div>
            <Intro />
            <About />
            <Portfolio />
            <Services />
            <Stats />
            <Contact />
        </div>
    );
}