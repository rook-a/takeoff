import { FormEvent, useState } from 'react';
import {
  List,
  ListItem,
  TextField,
  InputAdornment,
  ButtonGroup,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { Contact } from '../../types/contact';
import { useAppDispatch } from '../../hooks/hooks';
import {
  deleteContact,
  updateContact,
} from '../../store/contacts-slice/contacts-slice';

interface EditContactsFormProps {
  contact: Contact;
}

function EditContactFrom({ contact }: EditContactsFormProps): JSX.Element {
  const { name, city, company, phone, id } = contact;
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState(name);
  const [userCity, setUserCity] = useState(city);
  const [userCompany, setUserCompany] = useState(company);
  const [userPhone, setUserPhone] = useState(phone);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const data = {
      id,
      name: userName,
      city: userCity,
      company: userCompany,
      phone: userPhone,
    };

    dispatch(updateContact(data));
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
      action='#'
      method='post'
      onSubmit={handleSubmit}>
      <List>
        <ListItem>
          <TextField
            onChange={(evt) => setUserName(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={userName}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>name: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={(evt) => setUserCity(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={userCity}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>city: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={(evt) => setUserCompany(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={userCompany}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>company: </InputAdornment>
              ),
            }}
          />
        </ListItem>
        <ListItem>
          <TextField
            onChange={(evt) => setUserPhone(evt.target.value)}
            sx={{ width: '100%' }}
            id='standard-basic'
            variant='standard'
            value={userPhone}
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
          type='submit'
          edge='end'
          aria-label='change element'
          style={{ marginRight: '7px' }}>
          <DoneIcon />
        </IconButton>

        <IconButton
          onClick={() => {
            dispatch(deleteContact(id));
          }}
          color='error'
          edge='end'
          aria-label='delete element'>
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </form>
  );
}

export default EditContactFrom;
