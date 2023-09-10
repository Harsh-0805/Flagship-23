import { BrowserRouter } from "react-router-dom";
import { Works, Contact, Hero, Navbar, About } from "./components";
import Footer from "./components/footer";
import Sponsor from "./components/sponsors";
import Glimpses from "./components/Glimpses";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <Navbar />
        <Hero />
        <About />
        <Sponsor />
      </div>
      <Works />
      <Glimpses />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
