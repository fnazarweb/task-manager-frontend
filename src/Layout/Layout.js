import { Outlet, NavLink } from "react-router-dom";

import styles from "./Layout.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { todosApi } from "../redux/todos/todosApi";

const Layout = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const dispatch = useDispatch();
  const getActiveLink = (isActive) => {
    return classNames(styles.navLink, {
      [styles.activeLink]: isActive,
    });
  };

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout/");
      dispatch(todosApi.util.resetApiState());
      setIsAuthenticated(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink className={({ isActive }) => getActiveLink(isActive)} to="/">
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => getActiveLink(isActive)}
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) => getActiveLink(isActive)}
            to="/todoList"
          >
            Todos
          </NavLink>

          {isAuthenticated && (
            <NavLink className={styles.navLink} onClick={handleLogout}>
              Logout
            </NavLink>
          )}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <p className={styles.text}>
          © {new Date().getFullYear()} My Todos. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Layout;
