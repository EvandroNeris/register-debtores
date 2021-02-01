import React from 'react';
import { IInput } from '../../interfaces';
import { SInput } from '../../styles/s.input';

const Input: React.FC<IInput> = ({
  label,
  id,
  type,
  name,
  value
}) => {
  return (
    <React.Fragment>
      <SInput type={type} name={name} value={value}></SInput>
      <label htmlFor={id}>{label}</label>
    </React.Fragment>
  );
}

export default Input;
