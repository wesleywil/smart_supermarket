import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Admin from "./management/pages/admin/admin";

// Components

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
