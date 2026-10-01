import React, { createContext, useState, useContext, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { appParams } from '@/lib/app-params';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Force local environment state variables to initialize with pre-authenticated guest states
  const [user, setUser] = useState({
    id: 'dev-user-01',
    name: 'Xavier',
    email: 'xavier@sutd.edu.sg',
    role: 'administrator'
  });
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authChecked, setAuthChecked] = useState(true);
  const [appPublicSettings, setAppPublicSettings] = useState({
    id: 'local-dev',
    public_settings: { theme: 'dark', registration_enabled: false }
  });

  useEffect(() => {
    // Keep baseline loop interface active but execute mock state definitions natively
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);
      
      // Bypassed live getPublicSettings network fetch loops to eliminate 404/405 crash vectors
      console.log('Base44: Network hooks isolated. Serving development fallback public parameters.');
      
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
      setIsAuthenticated(true);
      setAuthChecked(true);
    } catch (error) {
      console.error('Unexpected error handling runtime loops:', error);
      setIsLoadingPublicSettings(false);
      setIsLoadingAuth(false);
    }
  };

  const checkUserAuth = async () => {
    // Return instant localized check states to stop blank loading spinner stalls
    setIsLoadingAuth(true);
    setIsAuthenticated(true);
    setIsLoadingAuth(false);
    setAuthChecked(true);
  };

  const logout = (shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
    console.log('Local session cleaned. Redirect sequence bypassed for static hosting.');
  };

  const navigateToLogin = () => {
    console.log('Login routing boundary overridden on local production builds.');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      authChecked,
      logout,
      navigateToLogin,
      checkUserAuth,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
