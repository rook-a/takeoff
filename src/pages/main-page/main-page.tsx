import { Container, Typography } from '@mui/material';

function MainPage(): JSX.Element {
  return (
    <Container sx={{ display: 'flex', height: '100%' }}>
      <Typography sx={{ m: 'auto', fontSize: '46px' }}>Welcome</Typography>
    </Container>
  );
}

export default MainPage;
