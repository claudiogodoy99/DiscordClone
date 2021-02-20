import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';

import { Grid } from './styles';


const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList>
            </ServerList>
            <ServerName/>
            <ChannelInfo />
            <ChannelList/>
            <UserInfo/>
        </Grid>
    );
}

export default Layout;