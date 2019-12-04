import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Header extends React.Component {
    render() {
        return(
            <div> 
                <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" >
          Material-UI
        </Link>
        <Link color="inherit" href="/login">
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
            </div>
        )
    }
}

export default Header;