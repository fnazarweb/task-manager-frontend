import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { HashLoader } from "react-spinners";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  return (
    <Suspense fallback={<HashLoader style={{ margin: "0 auto" }} />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/about"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <AboutPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/todoList"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <TodoListPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/todoList/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <EditItemPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/register"
            element={<RegisterPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
