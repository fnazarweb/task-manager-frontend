import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import { useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Something went wrong. Error details: {location.state.error}
      </h1>
      <Link to="/" className={styles.homeLink}>
        Click to back to the home page
      </Link>
    </div>
  );
};

export default ErrorPage;
