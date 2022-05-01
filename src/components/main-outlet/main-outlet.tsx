import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

import Header from '../header/header';
import Footer from '../footer/footer';

function MainOutlet(): JSX.Element {
  return (
    <Grid
      container
      direction='column'
      height='100vh'
      sx={{
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: '16px',
        color: '#0288d1',
      }}>
      <Grid item xl>
        <Header />
      </Grid>
      <Grid item md>
        <Outlet />
      </Grid>
      <Grid item xl>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default MainOutlet;
