import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <p className={styles.subtitle}>Simple. Clear. Productive.</p>

        <h1>Your tasks, organized in one place</h1>

        <p className={styles.description}>
          Welcome to my Todo List app. Create tasks, add descriptions, mark
          completed tasks and keep everything organized in one simple place.
        </p>

        <Link className={styles.button} to="/todoList">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
