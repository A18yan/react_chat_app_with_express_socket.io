import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404/page-not-found";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/signup/signup";
import ProtectedRoute from "./protected-route/protected-route";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />} >
        <Route path="/h" element={<div>Home</div>} /> {/* change this route */}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
