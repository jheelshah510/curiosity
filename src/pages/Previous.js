import React, { useEffect, useState } from "react";
import { projectFirestore } from "../misc/firebase";
import AllAsk from "./AllAsk";

const Previous = () => {
  const [doubts, setDoubts] = useState([]);
  useEffect(() => {
    const getDoubt = async () => {
      const data = await projectFirestore.collection("doubt").get();
      setDoubts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getDoubt();
  }, []);
  return (
    <div>
      {doubts &&
        doubts.map((doubt) => {
          return (
            <AllAsk key={doubt.id} title={doubt.title} status={doubt.status} />
          );
        })}
    </div>
  );
};

export default Previous;
