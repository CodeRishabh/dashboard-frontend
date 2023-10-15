import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Customers, Product, Help, Income, Promote } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <div className=" flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
