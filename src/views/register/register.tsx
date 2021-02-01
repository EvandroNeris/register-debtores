import React, { useEffect, useState } from 'react';
import { Button, Container, Footer, Row, List, Modal } from '../../components';
import { IElement } from '../../interfaces';
import { getUser, deleteUser } from '../../services/users';
import './register.css';
import _ from 'lodash';
import New from '../../components/modal/modal-templates/new';
import Delete from '../../components/modal/modal-templates/delete';

function Register(): IElement {
  const [isShown, setIsShown] = useState<boolean>(false);

  const [users, setUsers] = useState<any>([]);
  const [itemSelected, setItemSelected] = useState<boolean>(false);
  const [nameUserSelected, setNameUserSelected] = useState<string>('');
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
    onToggle();
  }

  function onToggle() {
    toggle();
  }

  function handleModal(type: string): void {
    toggle();
    type == 'new' ? setContent(<New></New>) : setContent(<Delete showModal={() => onToggle()} handleDelete={handleDelete} nameUserSelected={nameUserSelected}></Delete>);
  }

  function toggle() {
    console.log(isShown);
    setIsShown(!isShown);
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
