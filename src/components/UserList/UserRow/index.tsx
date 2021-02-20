import React from 'react';

import { User, Avatar } from './styles';


export interface Props {
    nickname: string,
    isBot?: boolean
}

const UserRow: React.FC<Props> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={ isBot ? "bot": ""}/>
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
}

export default UserRow;