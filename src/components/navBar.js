//importo de librerias externas
import React from 'react'
import {Link as LinkRouter} from "react-router-dom"
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

//importo los estilos
import '../styles/styles.css'

const pages = ['home', 'cities'];
const settings = ['login', 'signup'];

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
      <Container maxWidth="100%" sx={{backgroundColor: 'rgb(165, 126, 196)'}}>
        <Toolbar disableGutters sx={{display: 'flex' , justifyContent: 'center', alignContent: 'center'}}>
          <Typography variant="h2" noWrap className='festiveFont' sx={{display: { xs: 'none', md: 'flex'}, justifyContent:'center', alignItems:'center', paddingRight: '20px', paddingTop: '10px', paddingBottom: '10px', color: 'white'}}>
            MyTinerary
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} sx={{bgcolor: 'white', color: 'rgb(165, 126, 196)'}}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <LinkRouter to={'/'+page}>
                    <Typography className='fredokaFont' sx={{color: 'black'}}>{page}</Typography>
                  </LinkRouter>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography variant="h3" noWrap className='festiveFont titleResp' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, paddingTop: '10px', paddingBottom: '10px'}}>
            MyTinerary
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <LinkRouter to={'/'+page} key={index} >              
                <Button onClick={handleCloseNavMenu}>
                <Typography variant="h6" className='fredokaFont' sx={{display: 'block', color: 'white'}}>{page}</Typography>
                </Button>
              </LinkRouter>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings" sx={{width: '10px',  paddingRight: '20px'}}>
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar src="/broken-image.jpg" sx={{bgcolor: 'white', color: 'rgb(165, 126, 196)'}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px'}}
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
                  <LinkRouter to={'/'+setting}>
                    <Typography className='fredokaFont' sx={{color: 'black'}}>{setting}</Typography>
                  </LinkRouter>
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
