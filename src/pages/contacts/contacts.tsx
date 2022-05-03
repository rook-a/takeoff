import { useEffect } from 'react';
import { Container } from '@mui/material';

import AddContactForm from '../../components/add-contact-form/add-contact-form';
import ContactsList from '../../components/contacts-list/contacts-list';

import { useAppDispatch } from '../../hooks/hooks';
import { fetchContacts } from '../../store/contacts-slice/contacts-slice';

function Contacts(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
