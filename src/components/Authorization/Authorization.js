import React from "react";
import useAuthorization from "../../hooks/useAuthorization";
import useConsoleLogger from "../../hooks/useConsoleLogger";
import style from "./authorization.css";

export const Authorization = () => {
  const { isAuthorized, toggleAuthorization } = useAuthorization();

  useConsoleLogger(isAuthorized);

  return (
    <div className="container__auth">
      {isAuthorized ? (
        <a
          className="auth__button logout"
          onClick={toggleAuthorization}
          href="#login"
        >
          logout
        </a>
      ) : (
        <a
          className="auth__button login"
          onClick={toggleAuthorization}
          href="#logout"
        >
          login
        </a>
      )}
    </div>
  );
};
