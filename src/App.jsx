import { BrowserRouter } from "react-router-dom";
import { Works, Contact, Hero, Navbar } from "./components";
import Footer from "./components/footer";
import Sponsor from "./components/sponsors";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 overflow-hidden leading-relaxed">
        <div className="bg-cover bg-no-repeat bg-center relative">
          <Navbar />
        </div>
        <Hero />
        {/* <About /> */}
        <Sponsor />
      </div>
      <div className="relative z-0">
        <Works className="bg-[#d3d3d3]" />
      </div>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
