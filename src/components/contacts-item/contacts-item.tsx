import { useState } from 'react';

import { ButtonGroup, IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import DoneIcon from '@mui/icons-material/Done';
import EditContactFrom from '../edit-contact-form/edit-contact-form';

function ContactsItem(): JSX.Element {
  const [isEditForm, setIsEditForm] = useState(false);

  const handleOpenEditFormClick = () => {
    setIsEditForm(!isEditForm);
  };

  const handleCloseEditFormClick = () => {
    setIsEditForm(!isEditForm);
  };

  return (
    <ListItem sx={{ justifyContent: 'space-between' }}>
      {isEditForm ? (
        <EditContactFrom />
      ) : (
        <List>
          <ListItem>name: qwerty</ListItem>
          <ListItem>city: cityname</ListItem>
          <ListItem>company: companyName</ListItem>
          <ListItem>phone: 1234</ListItem>
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
