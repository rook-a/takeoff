import { ButtonGroup, IconButton, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function ContactsItem(): JSX.Element {
  return (
    <ListItem sx={{ justifyContent: 'space-between' }}>
      <List>
        <ListItem>name: qwerty</ListItem>
        <ListItem>city: cityname</ListItem>
        <ListItem>company: companyName</ListItem>
        <ListItem>phone: 1234</ListItem>
      </List>

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
    </ListItem>
  );
}

export default ContactsItem;
