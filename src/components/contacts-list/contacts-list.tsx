import { List } from '@mui/material';
import ContactsItem from '../contacts-item/contacts-item';

function ContactsList(): JSX.Element {
  return (
    <List sx={{ mb: '50px' }}>
      <ContactsItem />
    </List>
  );
}

export default ContactsList;
