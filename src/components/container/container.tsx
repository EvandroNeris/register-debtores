import React from 'react';
import { IContainer } from '../../interfaces';
import { BaseContainer } from '../../styles/base-container';

const Container: React.FC<IContainer> = ({
  children,
  width,
  height,
  backgroundColor
}) => (
  <BaseContainer width={width} height={height} backgroundColor={backgroundColor}>
  {children}
  </BaseContainer>
);

export default Container;
