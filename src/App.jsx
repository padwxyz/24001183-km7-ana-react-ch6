import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import NavbarTailwind from "./components/navbar/NavbarTailwind";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import ErrorPage from "./pages/404";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      {isAuthenticated && <NavbarTailwind onLogout={handleLogOut} />}

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
