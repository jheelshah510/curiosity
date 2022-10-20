import { useState } from "react";
import { projectAuth } from "../misc/firebase";
import { useAuthContext } from "./useAuthContext";

const useSignUp = () => {
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

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false);
      setErrorr(null);
    } catch (err) {
      console.log(err.message);
      setErrorr(err.message);
      setIsPending(false);
    }
  };

  return { errorr, isPending, signUp };
};

export default useSignUp;
