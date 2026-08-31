import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthContext } from "./context/AuthContext";
import { useDispatch } from "react-redux";
import { getUsersAsync } from "./redux/users/usersActions";

const Layout = lazy(() => import("./Layout/Layout"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFoundPage"));
const EditItemPage = lazy(() => import("./pages/EditItem/EditItemPage"));
const TodoListPage = lazy(() => import("./pages/List/TodoListPage"));
const ErrorPage = lazy(() => import("./pages/Error/ErrorPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));

function App() {
  const email = localStorage.getItem("email");

  const [isAuthenticated, setIsAuthenticated] = useState(!!email);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Suspense fallback={<HashLoader style={{ margin: "0 auto" }} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <AboutPage />
                </PrivateRoute>
              }
            />
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
