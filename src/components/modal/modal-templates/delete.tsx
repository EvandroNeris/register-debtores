import React from 'react';
import { Button } from '../..';
import { IDelete } from '../../../interfaces';

const Delete: React.FC<IDelete> = ({
  handleDelete,
  nameUserSelected,
  showModal
}) => {
  return (
    <React.Fragment>
      <div className="container-description">
        <p className="description-modal">Tem certeza que deseja realmente exluir:  <span className="name-user-deleted">{nameUserSelected}</span>?</p>
      </div>
      <div className="container-buttons">
        <Button onClick={showModal} backgroundColor={'#c2c2c2'} hoverColor={'#e0dede'}>
          Cancelar
        </Button>
        <Button onClick={() => handleDelete()} backgroundColor={'#EF7C7C'} hoverColor={'#FAA4A4'}>
          Confirmar
        </Button>
      </div>
    </React.Fragment>
  );
}

export default Delete;
