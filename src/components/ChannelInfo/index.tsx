import React from 'react';

import { Container, HashtagIcon, Title, Separetor, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>chat-livre</Title>
      <Separetor />
      <Description>Cannal aberto para conversas </Description >
    </Container>
  );
}

export default ChannelInfo;