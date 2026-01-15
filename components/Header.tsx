'use client'

import { useEffect, useState } from 'react'

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

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
