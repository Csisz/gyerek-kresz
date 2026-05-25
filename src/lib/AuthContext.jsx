import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { base44 } from "@/api/base44Client";

const DEMO_USER = {
  id: "local-demo-child",
  name: "Helyi demo",
  email: "demo@kresz-kaland.local",
  role: "demo"
};

const isBase44AuthEnabled = import.meta.env.VITE_ENABLE_BASE44_AUTH === "true";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(DEMO_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [authError, setAuthError] = useState(null);

  const checkUserAuth = useCallback(async () => {
    if (!isBase44AuthEnabled) {
      setUser(DEMO_USER);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
      setAuthError(null);
      return DEMO_USER;
    }

    setIsLoadingAuth(true);
    try {
      const currentUser = await base44.auth.me();
      setUser(currentUser);
      setIsAuthenticated(true);
      setAuthError(null);
      return currentUser;
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      setAuthError({ type: "auth_required", message: error.message || "Bejelentkezés szükséges" });
      return null;
    } finally {
      setIsLoadingAuth(false);
    }
  }, []);

  const logout = useCallback((shouldRedirect = true) => {
    if (!isBase44AuthEnabled) {
      setUser(DEMO_USER);
      setIsAuthenticated(true);
      return;
    }

    setUser(null);
    setIsAuthenticated(false);
    base44.auth.logout(shouldRedirect ? window.location.href : undefined);
  }, []);

  const navigateToLogin = useCallback(() => {
    if (isBase44AuthEnabled) {
      base44.auth.redirectToLogin(window.location.href);
    } else {
      window.location.href = "/";
    }
  }, []);

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    isLoadingAuth,
    isLoadingPublicSettings: false,
    authError,
    appPublicSettings: { localDemoMode: !isBase44AuthEnabled },
    authChecked: true,
    logout,
    navigateToLogin,
    checkUserAuth,
    checkAppState: checkUserAuth
  }), [authError, checkUserAuth, isAuthenticated, isLoadingAuth, logout, navigateToLogin, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
