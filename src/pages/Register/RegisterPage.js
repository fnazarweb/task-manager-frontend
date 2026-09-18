import { useContext, useRef, useState } from "react";
import styles from "./RegisterPage.module.css";

import { AuthContext } from "../../context/AuthContext";

import { registerUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {
  isNotEmpty,
  isValidEmail,
  isValidPassword,
} from "../../utils/authValidation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const RegisterPage = () => {
  const [inputError, setInputError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);

  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!isNotEmpty(email) || !isNotEmpty(password)) {
      setInputError("Fields cannot be empty");
      return;
    }

    if (!isValidEmail(email)) {
      setInputError("Please enter a valid email");
      return;
    }

    if (!isValidPassword(password)) {
      setInputError("Password must contain at least 6 characters");
      return;
    }
    setInputError("");

    const payload = {
      email: email.toLowerCase(),
      password,
    };

    try {
      await registerUser(payload);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      if (error.response?.data?.message?.includes("duplicate key")) {
        setInputError("User with this email already exists");
      } else {
        setInputError("Registration failed: Server is unavailable");
      }
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
            ref={passRef}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
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
          Register
        </button>
        <p className={styles.loginText}>
          Already have an account?{" "}
          <button
            type="button"
            className={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
