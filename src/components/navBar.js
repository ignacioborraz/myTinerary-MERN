import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link as LinkRouter} from "react-router-dom"
import '../styles/home.css';

const pages = ['Home', 'Cities', 'Logup', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{backgroundColor: 'rgb(33, 159, 148)'}}>
        <Toolbar disableGutters sx={{display: 'flex' , justifyContent: 'center', alignContent: 'center'}}>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}>
            <img src={process.env.PUBLIC_URL+'/img/whitelogo.png'} alt="whiteLogomyTinerary" className='logo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{vertical: 'bottom',horizontal: 'left'}}
              keepMounted
              transformOrigin={{vertical: 'top',horizontal: 'left'}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' }}}
            >
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <LinkRouter to={page} key={page}>{page}</LinkRouter>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" className='titles' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            MyTinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <LinkRouter to={page}>                
                <Button key={index} onClick={handleCloseNavMenu} sx={{color: 'white', display: 'block'}} className='buttonIndex'>
                  {page}
                </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{vertical: 'top',horizontal: 'right'}}
              keepMounted
              transformOrigin={{vertical: 'top',horizontal: 'right'}}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
