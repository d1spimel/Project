import { useState } from "react";

const useAuthorization = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const toggleAuthorization = () => {
    setIsAuthorized((prevIsAuthorized) => !prevIsAuthorized);
  };

  return { isAuthorized, toggleAuthorization };
};

export default useAuthorization;
