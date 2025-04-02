import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Cases from "./components/pages/Cases";
import Hearings from "./components/pages/Hearings";
import Orders from "./components/pages/Orders";
import Advocate from "./components/pages/Advocate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />   
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
