"use client";
import { auth } from "@/lib/firebase/services";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return user;
}
