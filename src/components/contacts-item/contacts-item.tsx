import { useState } from 'react';

import { ButtonGroup, IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from '@mui/icons-material/Done';
import EditContactFrom from '../edit-contact-form/edit-contact-form';
import { Contact } from '../../types/contact';

interface ContactsItemProps {
  contact: Contact;
}

function ContactsItem({ contact }: ContactsItemProps): JSX.Element {
  const [isEditForm, setIsEditForm] = useState(false);

  const { name, city, company, phone } = contact;

  const handleOpenEditFormClick = () => {
    setIsEditForm(!isEditForm);
  };

  const handleCloseEditFormClick = () => {
    setIsEditForm(!isEditForm);
  };

  return (
    <ListItem sx={{ justifyContent: 'space-between' }}>
      {isEditForm ? (
        <EditContactFrom contact={contact} />
      ) : (
        <List>
          <ListItem>name: {name}</ListItem>
          <ListItem>city: {city}</ListItem>
          <ListItem>company: {company.name}</ListItem>
          <ListItem>phone: {phone}</ListItem>
        </List>
      )}

      <ButtonGroup size='medium'>
        {isEditForm ? (
          <IconButton
            onClick={handleCloseEditFormClick}
            edge='end'
            aria-label='change element'
            style={{ marginRight: '7px' }}>
            <DoneIcon />
          </IconButton>
        ) : (
          <IconButton
            onClick={handleOpenEditFormClick}
            edge='end'
            aria-label='change element'
            style={{ marginRight: '7px' }}>
            <CreateIcon />
          </IconButton>
        )}
        <IconButton color='error' edge='end' aria-label='delete element'>
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </ListItem>
  );
}

export default ContactsItem;
