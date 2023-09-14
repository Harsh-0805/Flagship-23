import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Works, Contact, Hero, Navbar, About } from "./components";
import Footer from "./components/footer";
import Sponsor from "./components/sponsors";
import Glimpses from "./components/Glimpses";
import QRCodeGenerator from "./components/QRCodeGenerator";
import Page from "./components/Page";
import RegistrationForm from "./components/RegistrationForm";
import CompletedRegistration from "./components/completedRegistration";
import ErrorPage from "./components/error";

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
        <Route path="/registration/fg-reg-1x33d/:n" element={<RegistrationForm/>}/>
        <Route path="/success" element={<CompletedRegistration />} />
        <Route path="/error" element={<ErrorPage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
