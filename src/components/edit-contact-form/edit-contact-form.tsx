import {
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  TextField,
  InputAdornment,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function EditContactFrom(): JSX.Element {
  return (
    <ListItem sx={{ justifyContent: 'space-between' }}>
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
        <IconButton
          edge='end'
          aria-label='change element'
          style={{ marginRight: '7px' }}>
          <DoneIcon />
        </IconButton>
        <IconButton color='error' edge='end' aria-label='delete element'>
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </ListItem>
  );
}

export default EditContactFrom;
