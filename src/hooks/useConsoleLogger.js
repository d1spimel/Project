import { useEffect } from "react";

const useConsoleLogger = (data) => {
  useEffect(() => {
    console.log("Data in console: ", data);
  }, [data]);
};

export default useConsoleLogger;
