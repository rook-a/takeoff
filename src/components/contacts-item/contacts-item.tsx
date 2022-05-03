import { useEffect, useState } from 'react';
import { ButtonGroup, IconButton, List, ListItem } from '@mui/material';

import EditContactFrom from '../edit-contact-form/edit-contact-form';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  changeDeleteContactStatus,
  changeUpdateContactStatus,
  deleteContact,
  fetchContacts,
  selectDeleteContactStatus,
  selectUpdateContactStatus,
} from '../../store/contacts-slice/contacts-slice';

import { Contact } from '../../types/contact';
import { FetchStatus } from '../../utils/const';

import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

interface ContactsItemProps {
  contact: Contact;
}

function ContactsItem({ contact }: ContactsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const updateContactStatus = useAppSelector(selectUpdateContactStatus);
  const deleteContactStatus = useAppSelector(selectDeleteContactStatus);
  const [isEditForm, setIsEditForm] = useState(false);

  const { name, city, company, phone, id } = contact;

  useEffect(() => {
    if (updateContactStatus === FetchStatus.Fulfilled) {
      dispatch(fetchContacts());
      dispatch(changeUpdateContactStatus(FetchStatus.Idle));
      setIsEditForm(false);
    }

    if (deleteContactStatus === FetchStatus.Fulfilled) {
      dispatch(fetchContacts());
      dispatch(changeDeleteContactStatus(FetchStatus.Idle));
      setIsEditForm(false);
    }
  }, [deleteContactStatus, dispatch, isEditForm, updateContactStatus]);

  const handleOpenEditFormClick = () => {
    setIsEditForm(true);
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
        </>
      )}
    </ListItem>
  );
}

export default ContactsItem;
