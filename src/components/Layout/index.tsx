import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';

import { Grid } from './styles';
import UserList from '../UserList';
import ChannelData from '../ChannelData';


const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList>
            </ServerList>
            <ServerName/>
            <ChannelInfo />
            <ChannelList/>
            <UserInfo/>
            <ChannelData/>
            <UserList/>
        </Grid>
    );
}

export default Layout;