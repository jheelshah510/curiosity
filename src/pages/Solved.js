import React, { useEffect, useState } from "react";
import { projectFirestore } from "../misc/firebase";
import Doubtout from "../components/Doubtout";

const Solved = () => {
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
            <Doubtout
              key={doubt.id}
              title={doubt.title}
              status={!doubt.status}
            />
          );
        })}
    </div>
  );
};

export default Solved;
