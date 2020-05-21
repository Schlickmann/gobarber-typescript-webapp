import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signin');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Ju', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
