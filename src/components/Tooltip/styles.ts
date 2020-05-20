import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;

  span {
    width: 160px;
    background-color: #ff9000;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 0.7rem);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;