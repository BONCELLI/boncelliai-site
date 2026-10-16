import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import RoiCalculator from "./components/RoiCalculator.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <RoiCalculator />
        <Process />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
