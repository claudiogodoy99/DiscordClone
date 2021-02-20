import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    background-color: var(--quaternary);
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;

    border-radius: 50%;
    background-color: var(--gray);
`;

export const UserData = styled.div`
    display: flex;

    margin-left: 6px;
    flex-direction: column;

    > strong {
        color: var(--white);
        font-size:13px;
        display: block;
    }

    > span {
        color: var(--gray);
        font-size:13px;
    }
`;

export const Icons = styled.div`
    display:flex;
    align-items: center;
    
    > svg:not(:first-child){
        margin-left: 7px;
    }
`;

export const MicIcon = styled(Mic)`
    width: 24px;
    width: 24px;
    cursor: pointer;
    color: var(--gray);

    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;

export const HeadPhoneIcon = styled(Headset)`
     width: 24px;
     width: 24px;

    color: var(--gray);
    cursor: pointer;
    transition: color .2s;
    
    &:hover{
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`

    width: 24px;
    width: 24px;

    color: var(--gray);
    cursor: pointer;
    transition: color .2s;
    
    &:hover{
        color: var(--white);
    }
`;
