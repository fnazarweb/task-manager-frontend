import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { HashLoader } from "react-spinners";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthContext } from "./context/AuthContext";

const Layout = lazy(() => import("./Layout/Layout"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const EditItemPage = lazy(() => import("./pages/EditItem/EditItemPage"));
const TodoListPage = lazy(() => import("./pages/List/TodoListPage"));
const ErrorPage = lazy(() => import("./pages/Error/ErrorPage"));
const RegisterPage = lazy(() => import("./pages/Register/RegisterPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("/auth/me");
        setIsAuthenticated(true);
      } catch (e) {
        setIsAuthenticated(false);
      } finally {
        setIsAuthLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthLoading) {
    return <HashLoader style={{ margin: "0 auto" }} />;
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Suspense fallback={<HashLoader style={{ margin: "0 auto" }} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/todoList"
              element={
                <PrivateRoute>
                  <TodoListPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/todoList/:id"
              element={
                <PrivateRoute>
                  <EditItemPage />
                </PrivateRoute>
              }
            />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
