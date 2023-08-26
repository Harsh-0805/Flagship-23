import { BrowserRouter } from "react-router-dom";
import { Works, Contact, Hero, Navbar } from "./components";
import Footer from "./components/footer";
import Sponsor from "./components/sponsors";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 ">
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Sponsor />
      </div>
      <Works />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
