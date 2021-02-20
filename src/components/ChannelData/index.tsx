import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, InputIcon, Input } from './styles';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef])

    return (
        <Container>
            <Messages ref={messageRef}>
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />

                <ChannelMessage
                    author="botzao"
                    content={<>
                        <Mention>@Marilene</Mention> chega mais
                    </>}
                    date="20/02/2021"
                    isBot={true}
                    hasMention={true}
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />

                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />       <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
                <ChannelMessage
                    author="gabs"
                    content="Olá marilene"
                    date="20/02/2021"
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;