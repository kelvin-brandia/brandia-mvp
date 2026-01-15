'use client'

import { useEffect, useState } from "react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <header>
      {isLoggedIn ? (
        <a href="/dashboard">Dashboard</a>
      ) : (
        <a href="/login">Login</a>
      )}
    </header>
  )
}
