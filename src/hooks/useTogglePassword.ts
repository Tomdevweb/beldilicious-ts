import { useState } from "react";

export const useTogglePassword = () => {
  const [shown, setShown] = useState(true);
  const ToggleShowPassword = () => {
    setShown(!shown);
  };

  return { shown, ToggleShowPassword };
};
