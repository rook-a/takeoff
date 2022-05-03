import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

import Header from '../header/header';
import Footer from '../footer/footer';

import { useAppSelector } from '../../hooks/hooks';
import { selectAuthrizationStatus } from '../../store/user-slice/user-slice';

function MainOutlet(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthrizationStatus);

  return (
    <Grid
      container
      direction='column'
      wrap='nowrap'
      height='100vh'
      sx={{
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: '16px',
        color: '#0288d1',
      }}>
      <Grid item xl>
        <Header authorizationStatus={authorizationStatus} />
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
