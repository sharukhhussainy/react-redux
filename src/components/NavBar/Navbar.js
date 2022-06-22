import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ label = "myMoney" }) {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">{label}</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
