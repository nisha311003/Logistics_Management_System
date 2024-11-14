import React, {useState} from 'react'
import { AppBar, IconButton, Toolbar, Typography,Box, Button, Menu, MenuList,MenuItem} from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';
const pages =['Home', 'Features', 'About','Logout'];
function HeaderPanel() {
  const [anchorNav, setAnchorNav] = useState(null);
  const openMenu = (event)=>{
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = ()=>{
    setAnchorNav(null);
  };
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display: {xs:'none',md:'flex'}}} >
                <LocalLibraryIcon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1, display: {xs:'none',md:'flex'}}}>Logistic Management System</Typography>
            <Box sx={{ display: {xs:'none',md:'flex'}}}>
                {/* <Button color='inherit' >Home</Button>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit'>Logout</Button> */}
                {pages.map((page)=>(
                  <Button color='inherit'>{page}</Button>
                ))}
            </Box>
            <Box sx={{display:{xs:'flex',md:'none'}}}>
              <IconButton size='large' edge='start' color='inherit' onClick={openMenu} >
                <MenuIcon/>
              </IconButton>
              <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={closeMenu} keepMounted>
                {/* <MenuList>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Features</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList> */}
                {pages.map((page)=>(
                  <MenuItem>{page}</MenuItem>
                ))}
              </Menu>
            </Box>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display: {xs:'flex',md:'none'}}} >
                <LocalLibraryIcon/>
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1, display: {xs:'flex',md:'none'}}}>Dashboard</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default HeaderPanel;