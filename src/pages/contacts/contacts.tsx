import {
  Container,
  FormControl,
  IconButton,
  Input,
  InputLabel,
} from '@mui/material';

import ContactsList from '../../components/contacts-list/contacts-list';

import SendIcon from '@mui/icons-material/Send';

function Contacts(): JSX.Element {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
        height: '100%',
      }}>
      <ContactsList />

      <FormControl variant='standard'>
        <InputLabel htmlFor='input-with-icon-adornment'>
          With a start adornment
        </InputLabel>
        <Input
          id='input-with-icon-adornment'
          endAdornment={
            <IconButton color='primary' edge='end' aria-label='send element'>
              <SendIcon />
            </IconButton>
          }
        />
      </FormControl>
    </Container>
  );
}

export default Contacts;
