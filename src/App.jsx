import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import Company from "./component/Company/Company";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Company />

      <Projects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
