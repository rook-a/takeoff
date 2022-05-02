import {
  ButtonGroup,
  FormControl,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

function AddContactForm(): JSX.Element {
  return (
    <FormControl
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <List>
        <ListItem>
          <TextField
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            // value='qwerty'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>name: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            // value='cityname'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>city: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            // value='companyName'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>company: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            // value='1234'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>phone: </InputAdornment>
              ),
            }}
          />
        </ListItem>
      </List>

      <ButtonGroup size='medium'>
        <IconButton edge='end' aria-label='send contact form'>
          <SendIcon color='primary' />
        </IconButton>
      </ButtonGroup>
    </FormControl>
  );
}

export default AddContactForm;
