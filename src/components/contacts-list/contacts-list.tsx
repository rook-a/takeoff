import { List } from '@mui/material';
import { useAppSelector } from '../../hooks/hooks';
import { selectContacts } from '../../store/contacts-slice/contacts-slice';
import ContactsItem from '../contacts-item/contacts-item';

function ContactsList(): JSX.Element {
  const contacts = useAppSelector(selectContacts);

  return (
    <List sx={{ mb: '50px' }}>
      {contacts.map((contact) => (
        <ContactsItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
}

export default ContactsList;
