import { Link } from 'react-router-dom';
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/images/logos/roxyLogoHoriz.svg";
import "../styles/header-footer.css";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const isLargeEnough = useMediaQuery('(min-width:700px)');
  const drawerWidth = 240;

  const navItems = [
    {title: 'Home', path: '/'}, 
    {title: 'Children', path: '/books/kids'}, 
    {title: 'Teens & Adults', path: '/books/teensadults'}, 
    {title: 'About', path: '/#about'}
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }} className='nav-links'>
      <Hamburger toggled={mobileOpen} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.path} key={item.title}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'left' }}>
                {item.title}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" id="header">
        <img 
          src="https://images.unsplash.com/photo-1629197238245-3c7497e96b41?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className="bg-img" 
          loading="lazy"
          />
        <Toolbar>
          {!isLargeEnough ? (
            <IconButton
              color="#000"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2}}
            >
              <Hamburger toggled={mobileOpen} />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Link to={item.path} key={item.title}>
                    {item.title}
                </Link>
              ))}
            </Box>
          )}
          <img src={logo} alt="Roxy Dane logo" className="logo-sm" />
        </Toolbar>
      </AppBar>
    
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1629197238245-3c7497e96b41?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="bg-img" 
            loading="lazy"
          />
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  )
}

export default Header