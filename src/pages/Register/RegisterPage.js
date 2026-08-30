import { useContext, useRef, useState } from "react";
import styles from "./RegisterPage.module.css";

import { HashLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync } from "../../redux/users/usersActions";
import {
  selectUsersLoading,
  selectUsersData,
} from "../../redux/users/usersSelectors";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [inputError, setInputError] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const usersLoading = useSelector(selectUsersLoading);
  const usersData = useSelector(selectUsersData);

  const dispatch = useDispatch();
  const ref = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = ref.current.value;
    const emailExist = usersData?.some(
      (item) => item.email === email.toLowerCase(),
    );
    if (email === "") {
      setInputError("Field cannot be empty");
      return;
    }

    if (emailExist) {
      setInputError("This email already exist");
      return;
    }

    setInputError("");
    const payload = {
      email: email.toLowerCase(),
    };
    localStorage.setItem("email", email.toLowerCase());

    try {
      await dispatch(registerUserAsync(payload)).unwrap();
      navigate("/");
      setIsAuthenticated(true);
    } catch (error) {
      navigate("/error", {
        state: {
          error: error.message,
        },
        replace: true,
      });
    }
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
          Register
        </button>
        <p>{inputError}</p>
      </form>
    </div>
  );
};

export default RegisterPage;
