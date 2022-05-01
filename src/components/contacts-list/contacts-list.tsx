import { List } from '@mui/material';
import ContactsItem from '../contacts-item/contacts-item';

function ContactsList(): JSX.Element {
  return (
    <List>
      <ContactsItem />
      <ContactsItem />
      <ContactsItem />
    </List>
  );
}

export default ContactsList;
