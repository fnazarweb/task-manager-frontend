import { Outlet, NavLink } from "react-router-dom";

import styles from "./Layout.module.css";
import classNames from "classnames";

const Layout = () => {
  const getActiveLink = (isActive) => {
    return classNames(styles.link, {
      [styles.activeLink]: isActive,
    });
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
