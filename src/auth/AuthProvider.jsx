import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const Googleprovider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, Googleprovider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 4. auth observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Logged User:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    loginWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
