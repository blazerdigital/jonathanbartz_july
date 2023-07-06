import About from "./components/About/About";
import Bio from "./components/Bio/Bio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Testimonial />
      <Music />
      <Bio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
