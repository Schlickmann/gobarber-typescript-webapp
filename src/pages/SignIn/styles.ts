import styled from 'styled-components';
import { shade } from 'polished';

import sigInBg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background-color: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 1rem;
      width: 100%;

      & + input {
        margin-top: 0.5rem;
      }
    }

    button {
      background-color: #ff9000;
      color: #322e38;
      border-radius: 10px;
      border: 0;
      padding: 1rem;
      width: 100%;
      font-weight: 600;
      margin-top: 1rem;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 1rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${sigInBg}) no-repeat center;
  background-size: cover;
`;