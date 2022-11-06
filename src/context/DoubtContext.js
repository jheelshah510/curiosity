import { createContext } from "react";

export const DoubtContext = createContext();

export const DoubtContextProvider = ({ children }) => {
  return <DoubtContextProvider>{children}</DoubtContextProvider>;
};
