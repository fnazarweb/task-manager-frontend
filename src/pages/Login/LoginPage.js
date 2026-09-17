import { useContext, useRef, useState } from "react";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { isNotEmpty } from "../../utils/authValidation";
import { loginUser } from "../../api/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [inputError, setInputError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!isNotEmpty(email) || !isNotEmpty(password)) {
      setInputError("Fields cannot be empty");
      return;
    }

    setInputError("");
    try {
      const data = await loginUser({ email: email.toLowerCase(), password });
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setInputError("");
      navigate("/", { replace: true });
    } catch (e) {
      setIsAuthenticated(false);
      setInputError("Invalid email or password");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          autoComplete="username"
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <div className={styles.passwordWrapper}>
          <input
            className={styles.input}
            ref={passwordRef}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
          />

          <button
            type="button"
            className={styles.passwordToggle}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        {inputError && <p className={styles.error}>{inputError}</p>}

        <button className={styles.submitBtn} type="submit">
          Login
        </button>

        <p className={styles.registerText}>
          Don't have an account?{" "}
          <button
            type="button"
            className={styles.registerBtn}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};
export default LoginPage;
