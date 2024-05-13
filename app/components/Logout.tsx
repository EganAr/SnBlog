"use client";

import { auth } from "@/lib/firebase/services";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const handleLogout = () => {
    try {
      signOut(auth);
      // Redirect to the login page or any other page
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-xs bg-slate-950 rounded-md text-teal-700 py-1.5 px-2"
    >
      Logout
    </button>
  );
}
