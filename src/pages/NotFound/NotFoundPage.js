import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>This page is not found</h1>
      <Link to="/" className={styles.homeLink}>
        Click to back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
