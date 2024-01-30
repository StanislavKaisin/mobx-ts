import React, { useState, useEffect, ReactNode, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser,
  UserCredential,
} from "firebase/auth";

import { auth } from "./firebase";
import UserAuthContext from "./authContext";

interface User {
  uid: string;
  email: string;
}

interface IUserAuthContext {
  user: User | null;
  logIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  googleSignIn: () => Promise<UserCredential>;
}

interface UserAuthContextProviderProps {
  children: ReactNode;
}

export const UserAuthContextProvider: React.FC<
  UserAuthContextProviderProps
> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => signOut(auth);
  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: FirebaseUser | null) => {
        setUser(currentUser as User | null);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const contextValue: IUserAuthContext = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };

  return (
    <UserAuthContext.Provider value={contextValue}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

export function useUserAuth() {
  return useContext(UserAuthContext);
}
