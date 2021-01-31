import React from 'react';
import { SButton } from '../../styles/s.buttons';
import { IButtonProps } from '../../interfaces';

const Button: React.FC<IButtonProps> = ({
  backgroundColor,
  hoverColor,
  children,
  onClick
}) => (
  <SButton onClick={() => onClick()} backgroundColor={backgroundColor} hoverColor={hoverColor}>
    {children}
  </SButton>
);

export default Button;
