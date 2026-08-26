import { useRef } from "react";
import styles from "./LoginPage.module.css";
import { useQuery } from "react-query";
import { getUsers } from "../../api/api";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthenticated }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { data, isFetching } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUsers,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailExist = data?.some((item) => item.email === ref.current.value);
    if (!emailExist) {
      setIsAuthenticated(false);
      return navigate("/register", { replace: true });
    }
    setIsAuthenticated(true);
    return navigate("/", { replace: true });
  };
  return isFetching ? (
    <HashLoader style={{ margin: "0 auto" }} />
  ) : (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input className={styles.input} ref={ref} id="email" name="email" />
        <button className={styles.submitBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
