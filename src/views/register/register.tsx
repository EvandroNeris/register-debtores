import React from 'react';
import { Button } from '../../components';
import { IElement } from '../../interfaces';
import { BaseContainer } from '../../styles/base-container';

function Register(): IElement {
  return (
    <BaseContainer width={100} height={100} backgroundColor={'#fff'}>
      <Button backgroundColor={'#000'} hoverColor={'#fff'}>Novo</Button>
    </BaseContainer>
  );
}

export default Register;
