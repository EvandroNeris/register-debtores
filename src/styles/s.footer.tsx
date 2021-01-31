import styled from 'styled-components';
import IFooter from '../interfaces/i.footer';

export const SFooter = styled.div<IFooter>`
  width: ${props => props.width+'vw'};
  height: ${props => props.height+'vh'};
  
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 0 40px;

  background-color: white;

  filter: drop-shadow(-2px -2px 2px rgba(0, 0, 0, 0.3));

  position: fixed;
  bottom: 0;
  
`;
