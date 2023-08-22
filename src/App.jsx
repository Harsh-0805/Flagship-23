import { BrowserRouter } from "react-router-dom";
import { Works, Contact, Hero, Navbar, StarsCanvas } from "./components";
import Footer from "./components/footer";
import Sponsor from "./components/sponsors";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 overflow-x-clip">
        <div className="bg-cover bg-no-repeat bg-center bg-[#131110] relative">
          <Navbar />
        </div>
        <Hero />
        {/* <About /> */}
        <Sponsor />
      </div>
      <div className="relative z-0 bg-primary">
        <Works />
        <div className="relative z-0">
          {/* <Contact />
          <StarsCanvas /> */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
