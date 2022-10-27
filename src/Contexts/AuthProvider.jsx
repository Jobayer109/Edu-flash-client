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
  const [loading, setLoading] = useState(true);

  //Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update name and photo
  const profile = (name, photoURL) => {
    setLoading(false)
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
  };

  //Sign in with email and password
  const logIn = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google sign in
  const googleSignIn = (googleProvider) => {
    setLoading(false)
    return signInWithPopup(auth, googleProvider);
  }

  //Github sign in
  const githubSignIn = (githubProvider) => {
    setLoading(false)
    return signInWithPopup(auth, githubProvider);
  }

  //Sign out
  const logOut = () => {
    setLoading(false)
    return signOut(auth);
  };

  //On auth state change
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setLoading(false)
    setUser(currentUser);
    return () => {
      unSubscribe();
    };
  });

  const authInfo = {
    user,
    loading,
    createUser,
    profile,
    logIn,
    logOut,
    googleSignIn,
    githubSignIn,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
