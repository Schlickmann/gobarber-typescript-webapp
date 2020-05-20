import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
