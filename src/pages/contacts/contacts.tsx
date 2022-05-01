import { FormControl, IconButton, Input, InputLabel } from '@mui/material';

import ContactsList from '../../components/contacts-list/contacts-list';

import SendIcon from '@mui/icons-material/Send';

import styles from './contacts.module.css';

function Contacts(): JSX.Element {
  return (
    <main className={styles['contacts-container']}>
      <ContactsList />

      <FormControl variant='standard'>
        <InputLabel htmlFor='input-with-icon-adornment'>
          With a start adornment
        </InputLabel>
        <Input
          id='input-with-icon-adornment'
          endAdornment={
            <IconButton color='primary' edge='end' aria-label='send element'>
              <SendIcon />
            </IconButton>
          }
        />
      </FormControl>
    </main>
  );
}

export default Contacts;
