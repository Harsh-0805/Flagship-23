import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 overflow-x-clip">
        <div className="bg-cover bg-no-repeat bg-center bg-[#131110] relative">
          <Navbar />
          <Hero />
        </div>
        {/* <About /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
