import React from 'react';

import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';
import ToastContainer from './components/ToastContainer';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
