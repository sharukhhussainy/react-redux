import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isPending } = useLogin();

  const handleSumbit = (event) => {
    event.preventDefault();
    login(email, password);
  };
  return (
    <form className={styles["login-form"]} onSubmit={handleSumbit}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {isPending && (
        <button disabled className="btn">
          Loading...
        </button>
      )}
      {!isPending && <button className="btn">Login</button>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
