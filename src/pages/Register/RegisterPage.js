import { useRef } from "react";
import styles from "./RegisterPage.module.css";
import { useMutation } from "react-query";
import { addUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const RegisterPage = ({ setIsAuthenticated }) => {
  const ref = useRef();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: addUser,
    onSuccess: () => navigate("/"),
    onError: (error) =>
      navigate("/error", {
        state: {
          error: error.message,
        },
        replace: true,
      }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: ref.current.value,
    };
    mutate(payload);
    setIsAuthenticated(true);
  };
  return isLoading ? (
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
      </form>
    </div>
  );
};

export default RegisterPage;
