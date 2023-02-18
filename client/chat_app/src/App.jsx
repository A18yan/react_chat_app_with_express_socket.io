import { Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404/page-not-found";
import Login from "./pages/auth/login/login";
import Register from "./pages/auth/signup/signup";
import Inbox from "./pages/chat/inbox";
import Layout from "./pages/layout/layout";
import ProtectedRoute from "./protected-route/protected-route";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route element={<ProtectedRoute />} > */}
      <Route path="/" element={<Layout />} >
        <Route path="chat" element={<Inbox />} />
      </Route>
      {/* </Route> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
