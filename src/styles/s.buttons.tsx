import styled from 'styled-components';
import { IButtonProps } from '../interfaces';

export const SButton = styled.button<IButtonProps>`
  font-size: 20px;
  
  height: 60px;
  width: 200px;

  background-color: ${(props) => props.backgroundColor};
  color: white;

  border: none;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;