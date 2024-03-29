import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        <Parallax type="about" />
      </section>

      <section>
        {/* <Services /> */}
        <About />
      </section>

      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      {/* <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section> */}
      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
