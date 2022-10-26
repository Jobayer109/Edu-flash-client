import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update name and photo
  const profile = (name, photoURL) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
  };

  //Sign in with email and password
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google sign in
  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  }

  //Sign out
  const logOut = () => {
    return signOut(auth);
  };

  //On auth state change
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    return () => {
      unSubscribe();
    };
  });

  const authInfo = { user, createUser, profile, logIn, logOut, googleSignIn };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
