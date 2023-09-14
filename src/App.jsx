import { BrowserRouter, Route, Routes } from "react-router-dom";
import QRCodeGenerator from "./components/QRCodeGenerator";
import Page from "./components/Page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/qr-code" element={<QRCodeGenerator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
