import { useContext } from "react";
import { FieldsContext } from "../context/FieldsContext";

export const useField = () => {
  const context = useContext(FieldsContext);

  return context;
};
