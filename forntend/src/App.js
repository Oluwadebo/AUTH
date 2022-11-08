import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Todo from "./component/Todo";
import Displaybackend from "./component/Displaybackend";
import Signup from "./component/Signup";
import Signin from "./component/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Displaybackend" element={<Displaybackend />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
