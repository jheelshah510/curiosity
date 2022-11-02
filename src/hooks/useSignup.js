import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../misc/firebase";
import { useAuthContext } from "./useAuthContext";

const useSignUp = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [errorr, setErrorr] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const signUp = async (email, password, displayName) => {
    setErrorr(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }

      await res.user.updateProfile({ displayName });
      projectFirestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          name: res.user.displayName,
          email: res.user.email,
          uid: res.user.uid,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      projectFirestore
        .collection("userChats")
        .doc(res.user.uid)
        .set({})
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setErrorr(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setErrorr(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { errorr, isPending, signUp };
};

export default useSignUp;
