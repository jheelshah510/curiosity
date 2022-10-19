import { useState } from "react";
import { projectAuth } from "../misc/firebase";

const useSignUp = () => {
  const [errorr, setErrorr] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signUp = async (email, password, displayName) => {
    setErrorr(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(res.user);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      await res.user.updateProfile({ displayName });
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
