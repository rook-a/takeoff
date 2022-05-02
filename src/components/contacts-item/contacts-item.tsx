import { useState } from 'react';

import { ButtonGroup, IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import EditContactFrom from '../edit-contact-form/edit-contact-form';
import { Contact } from '../../types/contact';
import { useAppSelector } from '../../hooks/hooks';
import { selectUpdateContactStatus } from '../../store/contacts-slice/contacts-slice';
import { FetchStatus } from '../../utils/const';

interface ContactsItemProps {
  contact: Contact;
}

function ContactsItem({ contact }: ContactsItemProps): JSX.Element {
  const updateContactStatus = useAppSelector(selectUpdateContactStatus);
  const [isEditForm, setIsEditForm] = useState(false);

  const { name, city, company, phone } = contact;

  if (updateContactStatus === FetchStatus.Fulfilled) {
    setIsEditForm(!isEditForm);
  }

  const handleOpenEditFormClick = () => {
    setIsEditForm(!isEditForm);
  };

  return (
    <ListItem sx={{ justifyContent: 'space-between' }}>
      {isEditForm ? (
        <EditContactFrom contact={contact} />
      ) : (
        <>
          <List>
            <ListItem>name: {name}</ListItem>
            <ListItem>city: {city}</ListItem>
            <ListItem>company: {company}</ListItem>
            <ListItem>phone: {phone}</ListItem>
          </List>
          <ButtonGroup size='medium'>
            <IconButton
              onClick={handleOpenEditFormClick}
              edge='end'
              aria-label='change element'
              style={{ marginRight: '7px' }}>
              <CreateIcon />
            </IconButton>

            <IconButton color='error' edge='end' aria-label='delete element'>
              <DeleteIcon />
            </IconButton>
          </ButtonGroup>
        </>
      )}
    </ListItem>
  );
}

export default ContactsItem;
