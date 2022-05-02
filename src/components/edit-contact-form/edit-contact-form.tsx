import { List, ListItem, TextField, InputAdornment } from '@mui/material';

function EditContactFrom(): JSX.Element {
  return (
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
  );
}

export default EditContactFrom;
