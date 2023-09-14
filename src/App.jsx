import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Works, Contact, Hero, Navbar, About } from "./components";
import Footer from "./components/footer";
import Sponsor from "./components/sponsors";
import Glimpses from "./components/Glimpses";
import QRCodeGenerator from "./components/QRCodeGenerator";
import Page from "./components/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* <Route path="/">
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
        </Route> */}
        <Route path="/qr-code" element={<QRCodeGenerator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
