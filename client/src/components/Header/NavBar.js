// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//     return (
//         <div className = "header">
//             {/* Logo */}
//             <Link className = "nav-title" to="/">
//                 <img className = "nav-logo" src={ "/logo192.png" } alt="React logo" />
//             </Link>

//             {/* Page Links */}
//             <div className = "nav-items">
//                 {/*<Link className = "nav-link" to='/Home'>Home</Link>*/}
//                 <Link className = "nav-link" to='/Login'>Sign In</Link>
//             </div>

//         </div>
//     )
// };

// export default NavBar;

import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { Button, CssBaseline, ListItemText, ClickAwayListener } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    content: {
        flewGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBarSpacer: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    },
    logoutButton: {
        marginLeft: theme.spacing(10),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    }

}));

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#fb8c00',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: '#000',
        },
    },
});


const NavBar = () => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} component={Link} to="/Home" style={{color:"white"}}>
                            GATOR TRADER
            </Typography>
                        <Button component={Link} to="/Login" color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                {/* <div className={classes.content}>
                </div> */}
            </div>
        </MuiThemeProvider>
    )
}

export default NavBar;


