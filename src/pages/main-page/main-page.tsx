import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';

import { useAppDispatch } from '../../hooks/hooks';
import { checkAuthAction } from '../../store/user-slice/user-slice';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <Container sx={{ display: 'flex', height: '100%' }}>
      <Typography sx={{ m: 'auto', fontSize: '46px' }}>Welcome</Typography>
    </Container>
  );
}

export default MainPage;
