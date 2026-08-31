import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./LoginPage.module.css";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  selectUsersData,
  selectUsersLoading,
} from "../../redux/users/usersSelectors";

const LoginPage = () => {
  const [inputError, setInputError] = useState("");
  const usersData = useSelector(selectUsersData);
  const usersLoading = useSelector(selectUsersLoading);
  const { setIsAuthenticated } = useContext(AuthContext);
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputEmail = ref.current.value;
    if (inputEmail === "") {
      setInputError("Field cannot be empty");
      return;
    }
    const userExist = usersData?.find(
      (item) => item.email === inputEmail.toLowerCase(),
    );
    if (!userExist) {
      setIsAuthenticated(false);
      setInputError("Please, type this email: demo@example.com");
      return;
    }
    localStorage.setItem("email", userExist.email.toLowerCase());
    setIsAuthenticated(true);
    setInputError("");
    return navigate("/", { replace: true });
  };
  return usersLoading ? (
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
        <p>{inputError}</p>
      </form>
    </div>
  );
};

export default LoginPage;
