import styled from 'styled-components';
import { IContainer } from '../interfaces';

export const SBaseContainer = styled.div<IContainer>`
  width: ${props => props.width+'vw'};
  height: ${props => props.height+'vh'};
  
  background-color: ${props => props.backgroundColor};
`;