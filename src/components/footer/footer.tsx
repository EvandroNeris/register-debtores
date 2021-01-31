import React from 'react';
import IFooter from '../../interfaces/i.footer';
import { SFooter } from '../../styles/s.footer';

const Footer: React.FC<IFooter> = ({
  width,
  height,
  children
}) => (
  <SFooter width={width} height={height}>
    {children}
  </SFooter>
)

export default Footer;
