import styled from 'styled-components';
import { IItemList } from '../interfaces';

export const SItemList = styled.li<IItemList>`
  list-style: none;
  
  background-color: ${(props) => props.backgroundColor};
  color: #b3b3b3;

  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  font-size: 20px;

  margin: 20px;

  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.3));

  cursor: pointer;
`;