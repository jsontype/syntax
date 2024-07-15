import { useEffect } from "react";

export const useEnterExit = () => {
  useEffect(() => {
    document.body.classList.add("custom-header-relative");
    return () => {
      document.body.classList.remove("custom-header-relative");
    };
  }, []);
};
