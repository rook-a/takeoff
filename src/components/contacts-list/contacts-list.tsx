import { ChangeEvent, useEffect, useState } from 'react';
import {
  List,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';

import ContactsItem from '../contacts-item/contacts-item';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  fetchContacts,
  selectContacts,
} from '../../store/contacts-slice/contacts-slice';

import SearchIcon from '@mui/icons-material/Search';

function ContactsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    setSearch(value);
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <FormControl variant='standard' sx={{ mb: '50px' }}>
        <InputLabel htmlFor='search'>Search</InputLabel>
        <Input
          onChange={handleChange}
          id='search'
          type='search'
          value={search}
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon color='primary' />
            </InputAdornment>
          }
        />
      </FormControl>

      <List sx={{ mb: '50px' }}>
        {filteredContacts.map((contact) => (
          <ContactsItem contact={contact} key={contact.id} />
        ))}
      </List>
    </>
  );
}

export default ContactsList;
