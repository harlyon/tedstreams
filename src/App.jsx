import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import PetroluemProducts from "./page/petroluem-lubricant";
import SafetyProducts from "./page/safety-products";
import MedicalProducts from "./page/medical-products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/lubricants" element={<PetroluemProducts />} />
        <Route path="/safety" element={<SafetyProducts />} />
        <Route path="/medical" element={<MedicalProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
