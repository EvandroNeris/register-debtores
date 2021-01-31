import styled from 'styled-components';
import { IButtonProps } from '../interfaces';

export const ButtonBig = styled.button<IButtonProps>`
  font-size: 20px;
  height: 50px;
  width: 100px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border: none;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;