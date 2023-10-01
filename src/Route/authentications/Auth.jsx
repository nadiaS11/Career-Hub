import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./firebase/firebase.config";
export const AuthContext = createContext(null);

const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("current user: ", currentUser);
      setUser(currentUser);
    });
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, createUser, loginUser, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

Auth.propTypes = {
  children: PropTypes.node,
};

export default Auth;
