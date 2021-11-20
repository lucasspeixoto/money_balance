import { createContext, ReactNode, useState, useEffect } from "react";

import { auth, firebase } from "../services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};


type AuthContext = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export {}
