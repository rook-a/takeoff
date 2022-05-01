import { Typography, Toolbar } from '@mui/material';

function Footer(): JSX.Element {
  return (
    <Toolbar sx={{ height: '100%', color: '#0288d1' }}>
      <Typography sx={{ m: 'auto' }}>FOOTER</Typography>
    </Toolbar>
  );
}

export default Footer;
