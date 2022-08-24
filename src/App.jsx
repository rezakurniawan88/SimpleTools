import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Base64 from "./pages/Base64/Base64";
import ROT13 from "./pages/ROT13/ROT13";
import Subfinder from "./pages/Subfinder/Subfinder";
import DecimalConverter from "./pages/DecimalConverter/DecimalConverter";
import BinaryConverter from "./pages/BinaryConverter/BinaryConverter";
import MDHashEncode from "./pages/MDHashEncode/MDHashEncode";
import SHAHashEncode from "./pages/SHAHashEncode/SHAHashEncode";
import ScreenSize from "./pages/ScreenSize/ScreenSize";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Base64 />} />
        <Route path="rot13" element={<ROT13 />} />
        <Route path="md-hash-encode" element={<MDHashEncode />} />
        <Route path="sha-hash-encode" element={<SHAHashEncode />} />
        <Route path="decimal" element={<DecimalConverter />} />
        <Route path="binary" element={<BinaryConverter />} />
        <Route path="subfinder" element={<Subfinder />} />
        <Route path="screen-size" element={<ScreenSize />} />
      </Routes>
    </div>
  );
}

export default App;
