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
import { sendNewContact } from '../../store/contacts-slice/contacts-slice';
import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';

function AddContactForm(): JSX.Element {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const data = {
      name,
      city,
      company,
      phone,
    };

    dispatch(sendNewContact(data));
  };

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
            onChange={(evt) => setName(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={name}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>name: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={(evt) => setCity(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={city}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>city: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={(evt) => setCompany(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={company}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>company: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={(evt) => setPhone(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={phone}
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
          onClick={handleClick}
          edge='end'
          aria-label='send contact form'>
          <SendIcon color='primary' />
        </IconButton>
      </ButtonGroup>
    </FormControl>
  );
}

export default AddContactForm;
