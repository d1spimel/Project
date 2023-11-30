import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
    return (
        <ul className={styles.container__navbar}>
          <Link to={"/"}>
            <li>catalog</li>
          </Link>
          <Link to={"/terms"}>
            <li>terms of purchase</li>
          </Link>
          <Link to={"/contacts"}>
            <li>contacts</li>
          </Link>
          <Link to={"/about"}>
            <li>about us</li>
          </Link>
          <Link to={"/debug"}>
            <li>debug</li>
          </Link>
          <Link to={"/admin"}>
            <li>admin</li>
          </Link>
        </ul>
    );
};