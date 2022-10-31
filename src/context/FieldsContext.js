import React, { createContext, useEffect, useState } from "react";
import { projectFirestore } from "../misc/firebase";

export const FieldsContext = createContext();

export const FieldsProvider = ({ children }) => {
  const [fields, setFields] = useState(null);

  useEffect(() => {
    // const fieldsListRef = database.ref("fields");
    // fieldsListRef.on("value", (snap) => {
    //   const data = transformToArrWithId(snap.val());
    //   console.log(data);
    //   setFields(data);
    // });
    projectFirestore
      .collection("fields")
      .get()
      .then((snap) => {
        if (snap.empty) {
          console.log("no fields");
        } else {
          let results = [];
          snap.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
            console.log(results);
          });
          setFields(results);
        }
      });
  }, []);

  return (
    <FieldsContext.Provider value={fields}>{children}</FieldsContext.Provider>
  );
};
