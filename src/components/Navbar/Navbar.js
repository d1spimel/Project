import styles from "./navbar.css"

export const Navbar = () => {
    return (
        <ul className="container__navbar">
          <a href="#">
            <li>catalog</li>
          </a>
          <a href="#">
            <li>terms of purchase</li>
          </a>
          <a href="#">
            <li>contacts</li>
          </a>
          <a href="#">
            <li>about us</li>
          </a>
        </ul>
    );
};