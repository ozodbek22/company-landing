import {About} from "./components/About";
import {Cta} from "./components/Cta";
import {Features} from "./components/Features";
import {Footer} from "./components/Footer";
import {Hero} from "./components/Hero";
import {HowItWorks} from "./components/HowItWorks";
import {Navbar} from "./components/Navbar";
import {ScrollToTop} from "./components/ScrollToTop";
import {Services} from "./components/Services";
import {Team} from "./components/Team";
import {Testimonials} from "./components/Testimonials";
import {LandingForm} from "./components/LandingForm";
import "./App.css";

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <HowItWorks/>
            <Features/>
            <Services/>
            <Cta/>
            <Testimonials/>
            <Team/>
            {/*<Pricing />*/}
            {/*<Newsletter />*/}
            {/*<FAQ />*/}
            <LandingForm/>
            <Footer/>
            <ScrollToTop/>
        </>
    );
}

export default App;
