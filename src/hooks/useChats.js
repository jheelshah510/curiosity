import { useContext } from "react";
import { ChatsContext } from "../context/ChatsContext";

export const useChats = () => {
  const context = useContext(ChatsContext);
  return context;
};
