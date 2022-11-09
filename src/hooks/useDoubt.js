import { useContext } from "react";
import { DoubtContext } from "../context/DoubtContext";

export const useDoubt = () => {
  const context = useContext(DoubtContext);
  return context;
};
