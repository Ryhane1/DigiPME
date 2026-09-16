import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPME from "./Auth/RegisterPME";
import RegisterFreelance from "./Auth/RegisterFreelancer";
import Login from "./Auth/Login";
import Home from "./Home";
import Dashboard from "./Dashboard/Dashboard.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
              path="/register/pme"
              element={<RegisterPME />}
          />

          <Route
              path="/register/freelance"
              element={<RegisterFreelance />}
          />

          <Route
              path="/login"
              element={<Login />}
          />

           <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;