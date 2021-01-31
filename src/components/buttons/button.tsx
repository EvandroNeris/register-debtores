import React from 'react';
import { ButtonBig } from '../../styles/buttons';
import { IButtonProps } from '../../interfaces';

const Button: React.FC<IButtonProps> = ({
  backgroundColor,
  hoverColor,
  children
}) => (
  <ButtonBig backgroundColor={backgroundColor} hoverColor={hoverColor}>
    {children}
  </ButtonBig>
);

export default Button;
