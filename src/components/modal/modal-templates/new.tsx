import React from 'react';
import { Button } from '../..';
import Input from '../../input/input';
import './new.css';

const New: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container-inputs">
        <Input name="user" label="Cliente" type="text" id="user" ></Input>
        <br/>
        <br/>
        <Input name="reason" label="Motivo" type="text" id="reason" ></Input>
        <br/>
        <br/>
        <Input name="price" label="Valor" type="text" id="price" ></Input>
      </div>
      <div className="container-buttons">
        <Button onClick={() => ''} backgroundColor={'#EF7C7C'} hoverColor={'#FAA4A4'}>
          Excluir
        </Button>
        <Button cssProps={{ propertie: 'padding-left', value: 20 } } onClick={() => ''} backgroundColor={'#32DE82'} hoverColor={'#5BE69B'}>
          Salvar
        </Button>
      </div>
    </React.Fragment>
  )
}

export default New;
