import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { AppRoute } from '../../utils/const';
import { Box } from '@mui/system';

function NotFound(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
      }}>
      <Box>
        <Typography sx={{ fontSize: '32px', mb: '150px' }}>
          404. Page not found
        </Typography>

        <Button
          sx={{ mr: '75px' }}
          color='info'
          variant='outlined'
          onClick={() => navigate(AppRoute.Root, { replace: true })}>
          Back to main page
        </Button>
        <Button color='info' variant='outlined' onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
