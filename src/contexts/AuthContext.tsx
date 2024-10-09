import React, { createContext, useState, ReactNode } from 'react'

interface User {
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => void
  register: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, password: string) => {
    // In a real application, you would validate credentials here
    setUser({ email })
  }

  const register = (email: string, password: string) => {
    // In a real application, you would create a new user here
    setUser({ email })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}