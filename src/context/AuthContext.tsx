"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type UserRole = "user" | "vendor" | "admin";
export type VendorStatus = "none" | "pending" | "approved" | "rejected";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  vendorStatus: VendorStatus;
  shopId?: string | null;
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  setUser: (user: AuthUser | null) => void;
  login: (params: { email: string; password: string; role: UserRole }) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(false);

  const login = ({ email, password, role }: { email: string; password: string; role: UserRole }) => {
    void password;
    const baseName = email.split("@")[0];

    const vendorStatus: VendorStatus =
      role === "vendor" ? "approved" : "none";

    const newUser: AuthUser = {
      id: `u_${Date.now()}`,
      email,
      name: baseName,
      role,
      vendorStatus,
      shopId: role === "vendor" ? "shop_1" : null,
    };

    setUser(newUser);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

