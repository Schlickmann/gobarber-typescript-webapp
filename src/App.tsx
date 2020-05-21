import React from 'react';

import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
