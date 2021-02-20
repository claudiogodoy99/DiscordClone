import React from 'react';
import UserRow from './UserRow';

import { Container, Role } from './styles';

const ServerName: React.FC = () => {
  return (
      <Container>
         <Role>Disponivel - 1</Role>
         <UserRow nickname="Assombroso"/>

         <Role>Disponivel - 2</Role>
         <UserRow nickname="Moco" isBot/>
         <UserRow nickname="Moco" isBot/>
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco da carambolas legais" />
         <UserRow nickname="Eu quero um frango" />
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco" />
         <UserRow nickname="Moco" isBot/>
      </Container>
  );
}

export default ServerName;