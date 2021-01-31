import React, { useEffect, useState } from 'react';
import { Button, Container, Footer, Row, List, UseModal, Modal } from '../../components';
import { IElement } from '../../interfaces';
import { getUser, deleteUser } from '../../services/users';
import './register.css';
import _ from 'lodash';

function Register(): IElement {
  const { isShown, toggle } = UseModal();

  const [users, setUsers] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);
  const [nameUserSelected, setNameUserSelected] = useState({});
  const [content, setContent] = useState<any | null>();
  const [idUser, setIdUser] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      const response = await getUser();

      setUsers(response);
    }
    loadData();
  }, []);

  function onSelectItem(id: number) {
    setItemSelected(!!id);
    setIdUser(id);

    for (const user of users) {
      user['id'] === id ? setNameUserSelected(user['name']) : null;
    }
  }

  function handleDelete() {
    deleteUser(idUser);
    toggle();
  }

  function handleModal(type: string): void {
    toggle();
    type == 'new' ? setContent(
      <React.Fragment>
      
      <div>
        <Button onClick={toggle} backgroundColor={'#EF7C7C'} hoverColor={'#FAA4A4'}>
          Excluir
        </Button>
        <Button onClick={toggle} backgroundColor={'#32DE82'} hoverColor={'#5BE69B'}>
          Salvar
        </Button>
      </div>
    </React.Fragment>
    ) : setContent(
      <React.Fragment>
        <div className="container-description">
          <p className="description-modal">Tem certeza que deseja realmente exluir:  <span className="name-user-deleted">{nameUserSelected}</span>?</p>
        </div>
        <div className="container-buttons">
          <Button onClick={toggle} backgroundColor={'#c2c2c2'} hoverColor={'#e0dede'}>
            Cancelar
          </Button>
          <Button onClick={() => handleDelete()} backgroundColor={'#EF7C7C'} hoverColor={'#FAA4A4'}>
            Confirmar
          </Button>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Container width={100} height={100} backgroundColor={'#fff'}>
        <Row>
          <Container width={30} height={80} backgroundColor={'#fff'}>
            <List data={users} click={(id: number) => onSelectItem(id)}></List>
          </Container>
          <Container width={70} height={80} backgroundColor={'#fff'}>
            
          </Container>
        </Row>
        <Footer width={100} height={20}>
          {
            itemSelected ? (<Button onClick={() => handleModal('delete')} backgroundColor={'#EF7C7C'} hoverColor={'#FAA4A4'}>Deletar</Button>) : (<div></div>)
          }
          <Button onClick={() => handleModal('new')} backgroundColor={'#32DE82'} hoverColor={'#5BE69B'}>Novo</Button>
        </Footer>
      </Container>
      <Modal isShown={isShown} hide={toggle} modalContent={_.cloneDeep(content)} headerText="" />
    </React.Fragment>
  );
}

export default Register;
