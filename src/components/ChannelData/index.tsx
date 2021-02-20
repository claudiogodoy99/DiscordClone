import React from 'react';
import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, InputIcon, Input } from './styles';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage 
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />   

                 <ChannelMessage 
                    author="botzao"
                    content="Olá marilene"
                    date="20/02/2021"
                    isBot={true}
                    hasMention={true}
                />    
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;