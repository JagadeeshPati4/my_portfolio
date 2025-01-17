import React from 'react';
import {useContext } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useMediaQuery, AppBar, Toolbar, BottomNavigation, BottomNavigationAction, colors } from '@mui/material';
import { IoHome, IoMoonOutline } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { SiGooglemessages } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {context} from '../../App';

import {useLocation }from 'react-router-dom';

const Navbar = () => {
    const contextValue = useContext(context);
    const { light,islight,isBgColor,isColor,isPage,isPageset } = contextValue;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const SideNavCss = {
        window: '100%',
        height: '100%',
        position: 'fixed',
        '& .MuiDrawer-paper': {
            backgroundColor: 'transparent',
            window: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            height: '100%',
            position: 'fixed',
        },
    };
    const location = useLocation();
    const currentPath = location.pathname;
    console.log('currentPath',currentPath);
    if (currentPath != isPage) {
        isPageset(currentPath);
    }
    const commonDimensions = {
        width: '48px',
        height: '48px',
        minWidth: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundImage: 'linear-gradient(to right,#2B2A2A 52%, #FEB401 50%)',
        backgroundSize: '200% 100%',
        backgroundPosition: 'left bottom',
        transition: 'background-position 1s ease-out',
        color: 'aliceblue',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        '&:hover': {
            backgroundImage: 'none',
            boxShadow: 'none',
            backgroundColor: "#FEB401",
        },
    };
    const SelectedStyle={
        backgroundImage: 'linear-gradient(to right,#FEB401 52%, #FEB401 50%)',
    }
    const listStyle = {
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1%',
    };
    
    const AppBarStyle = {
        padding: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '60px',
        minWidth: '30px',
        width: "50px",
        borderRadius: '50%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundImage: 'linear-gradient(to right,#2B2A2A 52%, #FEB401 50%)',
        backgroundSize: '200% 100%',
        backgroundPosition: 'left bottom',
        transition: 'background-position 1s ease-out',
        color: 'aliceblue',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        '&:hover': {
            backgroundImage: 'none',
            boxShadow: 'none',
            color:'#ffffff',
            backgroundColor: "#FEB401",
        },

    };
    
    const ListItemStyle = {
        display: 'flex',
        flexDirection: "row-reverse",
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        '&:hover': {
            backgroundColor: "#FEB401",
            width: '100%',
            height: '50px',
            borderRadius: "30px",
            padding: '0px'
        },
        '&:hover .MuiListItemText-root': {
            opacity: 1,
            color: "white"
        },
        '&:hover .MuiListItemIcon-root': {
            backgroundImage: "none",
            boxShadow: 'none',
        },
        '&.Mui-selected': {
            backgroundImage: 'linear-gradient(to right,#2B2A2A 52%, #FEB401 50%)',
        }
    };
    
    const listItemTextStyle = {
        opacity: 0,
        transition: 'opacity 0.3s ease',
    };
    console.log('isPage',isPage);
    const renderDrawer = () => (
        <Drawer
            sx={{
                ...SideNavCss,
                '& .MuiDrawer-paper': {
                    ...SideNavCss['& .MuiDrawer-paper'],
                    position: 'static', // Ensures the Drawer stays inline and doesn't float
                },
            }}
            variant="permanent"
            anchor="right" // Adjust the anchor to right
        >
            <List sx={listStyle}>
                <ListItem button component={Link} to="/" onClick={()=>isPageset('/')} selected={isPage === '/'} sx={ListItemStyle}>
                    <ListItemIcon  sx={isPage === '/'? { ...commonDimensions, ...SelectedStyle }:{ ...commonDimensions }}><IoHome size={25} /></ListItemIcon>
                    <ListItemText primary="HOME" sx={listItemTextStyle} />
                </ListItem>
                <ListItem button component={Link} to="/About" onClick={()=>isPageset('/About')} selected={isPage === '/About'} sx={ListItemStyle}>
                    <ListItemIcon sx={isPage === '/About'? { ...commonDimensions, ...SelectedStyle }:{ ...commonDimensions }}><RiContactsFill size={25} /></ListItemIcon>
                    <ListItemText primary="ABOUT" sx={listItemTextStyle} />
                </ListItem>
                <ListItem button component={Link} to="/Projects" onClick={()=>isPageset('/Projects')} selected={isPage === '/Projects'} sx={ListItemStyle}>
                    <ListItemIcon sx={isPage === '/Projects'? { ...commonDimensions, ...SelectedStyle }:{ ...commonDimensions }}><ImBooks size={25} /></ListItemIcon>
                    <ListItemText primary="PROJECTS" sx={listItemTextStyle} />
                </ListItem>
                <ListItem button component={Link} to="/Contacts" onClick={()=>isPageset('/Contacts')} selected={isPage === '/Contacts'} sx={ListItemStyle}>
                    <ListItemIcon sx={isPage === '/Contacts'? { ...commonDimensions, ...SelectedStyle }:{ ...commonDimensions }}><SiGooglemessages fill='white' size={25} /></ListItemIcon>
                    <ListItemText primary="CONTACT" sx={listItemTextStyle} />
                </ListItem>
            </List>
    
            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', marginRight: '10%' }}>
                <IconButton onClick={()=>islight(!light)} sx={commonDimensions}>
                    {light ? <FaRegLightbulb size={25} /> : <IoMoonOutline size={25} />}
                </IconButton>
            </Box>
        </Drawer>
    );
    

    const renderAppBar = () => (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: isBgColor, color: isColor }}>
            <Toolbar sx={{backgroundColor: isBgColor, color: isColor}}>
                <BottomNavigation sx={{ width: '100%', display: 'flex', justifyContent: 'space-between',backgroundColor: isBgColor, color: isColor ,m:1 }}>
                    <BottomNavigationAction sx={isPage === '/'? { ...AppBarStyle, ...SelectedStyle }:{ ...AppBarStyle }} component={Link} to="/" icon={<IoHome size={25} />} selected={isPage === '/'} />
                    <BottomNavigationAction sx={isPage === '/About'? { ...AppBarStyle, ...SelectedStyle }:{ ...AppBarStyle }} component={Link} to="/About" icon={<RiContactsFill size={25} />} selected={isPage === '/About'} />
                    <BottomNavigationAction sx={isPage === '/Projects'? { ...AppBarStyle, ...SelectedStyle }:{ ...AppBarStyle }} component={Link} to="/Projects" icon={<ImBooks size={25} />} selected={isPage === 'Projects'} />
                    <BottomNavigationAction sx={isPage === '/Contacts'? { ...AppBarStyle, ...SelectedStyle }:{ ...AppBarStyle }}  component={Link} to="/Contacts" icon={<SiGooglemessages size={25} />} selected={isPage === '/Contacts'} />
                    <BottomNavigationAction sx={AppBarStyle} icon={light ? <FaRegLightbulb size={25} /> : <IoMoonOutline size={25} />} onClick={()=>islight(!light)} />
                </BottomNavigation>
            </Toolbar>
        </AppBar>
    );

    return (
        <>
            {isMobile ? renderAppBar() : renderDrawer()}
        </>
    );
};

export default Navbar;