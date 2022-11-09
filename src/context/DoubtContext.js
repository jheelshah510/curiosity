import { createContext, useEffect, useState } from "react";
import { projectFirestore } from "../misc/firebase";

export const DoubtContext = createContext();

export const DoubtProvider = ({ children }) => {
  const [initialData, setInitialData] = useState(null);
  useEffect(() => {
    projectFirestore
      .collection("doubt")
      .get()
      .then((snap) => {
        if (snap.empty) {
          console.log("no doubts");
        } else {
          let results = [];
          snap.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setInitialData(results);
        }
      });
  }, []);
  return (
    <DoubtContext.Provider value={initialData}>
      {children}
    </DoubtContext.Provider>
  );
};
