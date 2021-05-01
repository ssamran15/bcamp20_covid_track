import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';



function Header({ statName }) {
    return (
        <div>
        <Typography component="h1" variant="h1" color="inherit" noWrap align="center" style={{ fontWeight: 600 }}>
            C<Icon color="secondary" style={{ fontSize: 75 }}>coronavirus</Icon>VID-19            
        </Typography>
        <Typography component="h1" variant="h3" color="inherit" noWrap align="center" style={{ fontWeight: 600 }}>
            {statName} Stats
        </Typography>
        </div>
    );
}

export default Header;