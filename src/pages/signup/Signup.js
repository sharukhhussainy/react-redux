import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { signup, isPending, error } = useSignup();

  const handleSumbit = (event) => {
    event.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSumbit}>
      <h2>Sign Up</h2>
      <label>
        <span>Display Name:</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
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
      {error && (
        <p style={{ "text-align": "center", padding: "10px" }}>{error}</p>
      )}

      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button disabled className="btn">
          Loading...
        </button>
      )}
    </form>
  );
}

export default Signup;
