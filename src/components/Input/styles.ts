import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #232129;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;
