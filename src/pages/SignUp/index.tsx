import React, { useCallback } from 'react';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUn: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Inform a valid email'),
        password: Yup.string().min(
          6,
          'Your password must have at least 6 digits',
        ),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber Sign In" />

        <Form onSubmit={handleSubmit}>
          <h1>Sign up for GoBarber</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Name" />
          <Input name="email" icon={FiMail} type="text" placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Password"
          />

          <Button type="submit">Sign Up</Button>
        </Form>

        <a href="/">
          <FiArrowLeft />
          Already have an account
        </a>
      </Content>
    </Container>
  );
};

export default SignUn;
