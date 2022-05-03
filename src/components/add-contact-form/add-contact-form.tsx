import { FormEvent, useEffect, useState } from 'react';
import {
  ButtonGroup,
  FormControl,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  TextField,
} from '@mui/material';

import {
  changeSendContactStatus,
  fetchContacts,
  selectSendContactStatus,
  sendNewContact,
} from '../../store/contacts-slice/contacts-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { FetchStatus } from '../../utils/const';

import SendIcon from '@mui/icons-material/Send';

function AddContactForm(): JSX.Element {
  const sendContactStatus = useAppSelector(selectSendContactStatus);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sendContactStatus === FetchStatus.Fulfilled) {
      dispatch(fetchContacts());
      dispatch(changeSendContactStatus(FetchStatus.Idle));

      setName('');
      setCity('');
      setCompany('');
      setPhone('');
    }
  }, [dispatch, sendContactStatus]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data = {
      name,
      city,
      company,
      phone,
    };

    dispatch(sendNewContact(data));
  };

  return (
    <form action='#' method='post' onSubmit={handleSubmit}>
      <FormControl
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <List sx={{ flexGrow: 1 }}>
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
          <IconButton type='submit' edge='end' aria-label='send contact form'>
            <SendIcon color='primary' />
          </IconButton>
        </ButtonGroup>
      </FormControl>
    </form>
  );
}

export default AddContactForm;
