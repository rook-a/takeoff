import { Container } from '@mui/material';
import AddContactForm from '../../components/add-contact-form/add-contact-form';

import ContactsList from '../../components/contacts-list/contacts-list';

function Contacts(): JSX.Element {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
        height: '100%',
      }}>
      <ContactsList />

      <AddContactForm />
    </Container>
  );
}

export default Contacts;
