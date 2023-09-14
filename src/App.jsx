import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/qr-code" element={<QRCodeGenerator />} />
        <Route path="/registration/fg-reg-1x33d/:n" element={<RegistrationForm/>}/>
        <Route path="/success" element={<CompletedRegistration />} />
        <Route path="/error" element={<ErrorPage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
