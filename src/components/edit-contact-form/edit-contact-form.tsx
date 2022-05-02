import { List, ListItem, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { Contact } from '../../types/contact';

interface EditContactsFormProps {
  contact: Contact;
}

function EditContactFrom({ contact }: EditContactsFormProps): JSX.Element {
  const { name, city, company, phone } = contact;
  const [userName, setUserName] = useState(name);
  const [userCity, setUserCity] = useState(city);
  const [userCompany, setUserCompany] = useState(company.name);
  const [userPhone, setUserPhone] = useState(phone);

  return (
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
  );
}

export default EditContactFrom;
