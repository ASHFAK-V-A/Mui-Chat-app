import React, { useState } from 'react';

import {
  Box,
  Container,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Menu,
  Badge,
  MenuItem
} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


// Define your theme
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

// Styled components
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const LogoSection = styled(Box)({
    display:'flex',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: '7px',
  width: '40%',
}));

const Icon = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
display:'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
    const [open,setOpen]=useState(false)
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <StyledToolbar >
          <LogoSection >
            <Typography variant="h5" display={{ xs: 'none', sm: 'block' }}>
              Zip chat
            </Typography>
            <ChatIcon sx={{ ml: 1 }} />
          </LogoSection>

          <Search>
            <InputBase placeholder="Search...." />
          </Search>
          <Icon>
            <Badge badgeContent={4} color="error">
              <MailIcon color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon color="white" />
            </Badge>
            <Avatar onClick={()=>setOpen(true)}
              sx={{ width: 30, height: 30 }}
              src="https://pixel77.com/wp-content/uploads/2014/11/20-Creative-Chat-Logo-Designs-19.png"
          
          />
          </Icon>

          <UserBox>
            <Avatar onClick={()=>setOpen(true)}
              sx={{ width: 30, height: 30 }}
              src="https://pixel77.com/wp-content/uploads/2014/11/20-Creative-Chat-Logo-Designs-19.png"
          
          />
            <Typography>Jhone</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu 
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={''}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
