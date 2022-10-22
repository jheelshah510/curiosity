import { useState, useEffect } from "react";
import { database, projectAuth } from "../misc/firebase";
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

      database.ref(`/profiles/${res.user.uid}`).set({
        name: res.user.displayName,
        email: res.user.email,
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
