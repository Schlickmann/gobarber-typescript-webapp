import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Sign In" />

        <form>
          <h1>Login to the system</h1>

          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Sign In</button>

          <a href="/reset">Forgot my password</a>
        </form>

        <a href="/register">
          <FiLogIn />
          Sign Up for GoBarber
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
