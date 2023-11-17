import styles from "./navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <ul className="container__navbar">
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
        </ul>
    );
};