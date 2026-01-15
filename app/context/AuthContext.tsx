"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PLANS } from "@/app/config/plans";

type User = {
  id: string;
  plan: "basic" | "pro";
  imagesUsed: number;
  lastReset: string;
};

type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
  canGenerate: boolean;
  incrementUsage: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // 🔁 Reset mensal automático
  function checkMonthlyReset(user: User) {
    const now = new Date();
    const last = new Date(user.lastReset);

    if (
      now.getMonth() !== last.getMonth() ||
      now.getFullYear() !== last.getFullYear()
    ) {
      return {
        ...user,
        imagesUsed: 0,
        lastReset: now.toISOString(),
      };
    }

    return user;
  }

  useEffect(() => {
    const stored = localStorage.getItem("brandia-user");
    if (stored) {
      const parsed = checkMonthlyReset(JSON.parse(stored));
      setUser(parsed);
      localStorage.setItem("brandia-user", JSON.stringify(parsed));
    }
  }, []);
  
function login() {
  const newUser: User = {
    id: "demo-user",
    plan: "basic",
    imagesUsed: 0,
    lastReset: new Date().toISOString(),
  };

  localStorage.setItem("brandia-user", JSON.stringify(newUser));
  setUser(newUser);
}


  function logout() {
    localStorage.removeItem("brandia-user");
    setUser(null);
  }

  function incrementUsage() {
    if (!user) return;

    const updated = {
      ...user,
      imagesUsed: user.imagesUsed + 1,
    };

    setUser(updated);
    localStorage.setItem("brandia-user", JSON.stringify(updated));
  }

const limit = user ? PLANS[user.plan].imageLimit : 0;
const canGenerate = !!user && user.imagesUsed < limit;


  return (
    <AuthContext.Provider
      value={{ user, login, logout, canGenerate, incrementUsage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
