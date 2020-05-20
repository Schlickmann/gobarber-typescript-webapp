import styled from 'styled-components';

export const Container = styled.div`
  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 1rem;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.5rem;
  }

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
