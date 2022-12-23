import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/homepage";
//  Management Pages
import Admin from "./management/pages/admin/admin";
import Print from "./management/pages/print/print";
//  Client Pages
import Scan from "./client/pages/scan";

// Components

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/print" element={<Print />} />
        <Route path="client/scan" element={<Scan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
