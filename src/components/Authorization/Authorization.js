import React from "react";
import style from "./authorization.css";

export const Authorization = (props) => {
  const { isAuthorized, onAuthClick } = props;

  return (
    <div className="container__auth">
      {isAuthorized ? (
        <a
          className="auth__button logout"
          onClick={() => onAuthClick(!isAuthorized)}
          href="#login"
        >
          logout
        </a>
      ) : (
        <a
          className="auth__button login"
          onClick={() => onAuthClick(!isAuthorized)}
          href="#logout"
        >
          login
        </a>
      )}
    </div>
  );
};
