import { createContext, useContext, useState, ReactNode } from "react";

// Mock user table structure for future agent reference
export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

// Mock users data
export const MOCK_USERS: User[] = [
  { id: "1", email: "user@example.com", name: "Demo User", created_at: "2026-01-01T00:00:00Z" },
];

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setIsLoggedIn(true);
    setUser(MOCK_USERS[0]);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
