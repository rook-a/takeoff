import { List } from '@mui/material';
import ContactsItem from '../contacts-item/contacts-item';
import EditContactFrom from '../edit-contact-form/edit-contact-form';

function ContactsList(): JSX.Element {
  return (
    <List sx={{ mb: '50px' }}>
      <ContactsItem />

      <EditContactFrom />
    </List>
  );
}

export default ContactsList;
