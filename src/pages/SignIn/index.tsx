import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber Sign In" />

        <form>
          <h1>Login to the system</h1>

          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Sign In</Button>

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
