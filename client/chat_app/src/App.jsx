import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/login/login";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
}

export default App;
