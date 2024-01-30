import { UserCredential } from "firebase/auth";
import { createContext } from "react";

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

const UserAuthContext = createContext<IUserAuthContext | undefined>(undefined);

export default UserAuthContext;
