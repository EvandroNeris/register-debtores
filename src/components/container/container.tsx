import React from 'react';
import { IContainer } from '../../interfaces';
import { SBaseContainer } from '../../styles/s.base-container';

const Container: React.FC<IContainer> = ({
  children,
  width,
  height,
  backgroundColor
}) => (
  <SBaseContainer width={width} height={height} backgroundColor={backgroundColor}>
  {children}
  </SBaseContainer>
);

export default Container;
