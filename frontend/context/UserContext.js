import { createContext } from "react";

export const UserContext = createContext({ user: null, setUser: null });

export const SignupContext = createContext({ signup: null, setSignup: null });
