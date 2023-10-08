import React, { useState } from "react";
import { Authorization } from "../Authorization/Authorization";
import { Logotype } from "../Logotype/Logotype";
import { Navbar } from "../Navbar/Navbar";
import styles from "./header.css";

export const Header = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleAuthClick = (newStatus) => {
    setIsAuthorized(newStatus);
  };

  return (
    <header>
      <Logotype />
      <Navbar />
      <Authorization isAuthorized={isAuthorized} onAuthClick={handleAuthClick} />
    </header>
  );
};