import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockPage from "./pages/StockPage";
import CorrelationPage from "./pages/CorrelationPage";
function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Stock Page</Link>
        <Link to="/correlation">Correlation Heatmap</Link>
      </nav>
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/correlation" element={<CorrelationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
