import { useState } from "react";
import { projectAuth } from "../firebase/firebase.config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  // const { dispatch } = useSignup();
  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = res.user;

      // dispatch({ type: "SIGNUP", payload: user });

      console.log(user);

      if (!res) {
        throw Error("Could not complete signup function check useSignup hook");
      }

      await res.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
