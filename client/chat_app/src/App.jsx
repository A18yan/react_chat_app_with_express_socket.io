import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/signup/signup";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
