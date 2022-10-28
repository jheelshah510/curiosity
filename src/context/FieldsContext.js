import React, { createContext, useContext, useEffect, useState } from "react";
import { database } from "../misc/firebase";
import { transformToArrWithId } from "../misc/helper";

const FieldsContext = createContext();

export const FieldsProvider = ({ children }) => {
  const [fields, setFields] = useState(null);

  useEffect(() => {
    const fieldsListRef = database.ref("fields");
    fieldsListRef.on("value", (snap) => {
      const data = transformToArrWithId(snap.val());
      console.log(data);
      setFields(data);
    });
    return () => {
      fieldsListRef.off();
    };
  }, []);

  return (
    <FieldsContext.Provider value={fields}>{children}</FieldsContext.Provider>
  );
};

export const useFields = () => {
  useContext(FieldsContext);
};
