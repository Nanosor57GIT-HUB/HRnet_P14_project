import "./main.css";
import Home from "./pages/Home";
import EmployeesList from "./pages/EmployeesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EmployeesList" element={<EmployeesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
