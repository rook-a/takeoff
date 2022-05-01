import { ButtonGroup, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

import styles from './contacts-item.module.css';

function ContactsItem(): JSX.Element {
  return (
    <li className={styles['contacts-item']}>
      <div>
        <p>name: qwerty</p>
        <p>city: cityname</p>
        <p>company: companyName</p>
        <p>phone: 1234</p>
      </div>

      <ButtonGroup size='medium'>
        <IconButton
          edge='end'
          aria-label='change element'
          style={{ marginRight: '7px' }}>
          <CreateIcon />
        </IconButton>
        <IconButton color='error' edge='end' aria-label='delete element'>
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </li>
  );
}

export default ContactsItem;
