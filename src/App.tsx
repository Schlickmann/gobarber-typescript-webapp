import React from 'react';

import SignIn from './pages/SignIn';
import AuthContext from './context/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Juliani' }}>
        <SignIn />
      </AuthContext.Provider>
      <GlobalStyle />
    </>
  );
};

export default App;
