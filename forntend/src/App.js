import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Upload from "./component/Upload";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Dashboard from "./component/Dashboard";
import Socket from "./component/Socket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Socket" element={<Socket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
