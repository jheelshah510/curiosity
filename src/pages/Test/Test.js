import React from "react";
// import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
// import { ListItem, ListItemIcon } from "@mui/material";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState, useEffect } from "react";
import "./Test.css";
import { projectFirestore } from "../../misc/firebase";
import { Button } from "@mui/material";
import { useDoubt } from "../../hooks/useDoubt";
// import { useParams } from "react-router-dom";

const Test = () => {
  const initialData = useDoubt();
  // const [doubts, setDoubts] = useState();
  // const { id } = useParams;

  // useEffect(() => {
  //   projectFirestore
  //     .collection("doubt")
  //     .get()
  //     .then((snapshot) => {
  //       let results = [];
  //       snapshot.docs.forEach((doc) => {
  //         results.push({ id: doc.id, ...doc.data() });
  //       });
  //       setDoubts(results);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  // useEffect(() => {
  //   projectFirestore
  //     .collection("doubt")
  //     .doc(id)
  //     .get()
  //     .then((doc) => {
  //       console.log(doc);
  //     });
  // }, []);

  // useEffect(() => {
  //   const getDoubt = async () => {
  //     const data = await projectFirestore.collection("doubt").get();
  //     setDoubts(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //   };
  //   getDoubt();
  // }, []);

  const handleClick = () => {
    console.log(initialData[0].id);
  };

  return (
    // <div>
    //   <div className="fields">
    //     <div className="card" style={{ cursor: "pointer" }}>
    //       <div className="title">What is a stack in DSA?</div>
    //       <ListItem>
    //         <ListItemIcon className="list">
    //           {/* <CheckCircleOutlineRoundedIcon style={{ color: "green" }} />
    //         Solved */}
    //           <InfoOutlinedIcon style={{ color: "orange" }} />
    //           Pending
    //         </ListItemIcon>
    //       </ListItem>
    //     </div>
    //   </div>
    // </div>
    // <div>
    //   {doubts &&
    //     doubts.map((doubt) => {
    //       return (
    //         <div key={doubt.id}>
    //           <h2>Title:{doubt.title}</h2>
    //         </div>
    //       );
    //     })}
    // </div>
    <div>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Baby
      </Button>
    </div>
  );
};

export default Test;
