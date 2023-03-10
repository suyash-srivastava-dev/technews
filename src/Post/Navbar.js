import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function NavBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 10,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NEWS FEEDS 
          </Typography>

        
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}