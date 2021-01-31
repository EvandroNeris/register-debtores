import React, { useEffect, useState } from 'react';
import { Button, Container, Footer, Row, List } from '../../components';
import { IElement } from '../../interfaces';
import { get } from '../../services/users';

function Register(): IElement {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await get();

      setUsers(response);
    }
    loadData();
  }, [])

  return (
    <Container width={100} height={100} backgroundColor={'#fff'}>
      <Row>
        <Container width={30} height={80} backgroundColor={'#fff'}>
          <List data={users}></List>
        </Container>
        <Container width={70} height={80} backgroundColor={'#fff'}>
          aqui
        </Container>
      </Row>
      <Footer width={100} height={20}>
        <Button backgroundColor={'#EF7C7C'} hoverColor={'#FAA4A4'}>Deletar</Button>
        <Button backgroundColor={'#32DE82'} hoverColor={'#5BE69B'}>Novo</Button>
      </Footer>
    </Container>
  );
}

export default Register;
