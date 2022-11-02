import React, { useEffect, useState } from "react";
import { projectFirestore } from "../misc/firebase";
import Doubt from "../components/Doubt";

const Pending = () => {
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
            <Doubt key={doubt.id} title={doubt.title} status={doubt.status} />
          );
        })}
    </div>
  );
};

export default Pending;
