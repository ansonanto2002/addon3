import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
<Box>
    <AppBar>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    
          </Typography>
          <Button color="inherit"><Link to="/"style={{color:'white',textDecoration:'none'}}>login</Link></Button>
          <Button color="inherit"><Link to="singup"style={{color:'white',textDecoration:'none'}}>signup</Link></Button>
          <Button color="inherit"><Link to="contact"style={{color:'white',textDecoration:'none'}}>contact</Link></Button>
          
        </Toolbar>
        </AppBar>
     </Box>     
    </div>
  )
}

export default Navbar
