import { FormControl, Input, InputLabel } from '@mui/material';
import AddButton from '../add-button/add-button';

function ContactsForm(): JSX.Element {
  return (
    <li>
      <form>
        <FormControl variant='standard'>
          <InputLabel htmlFor='input-with-icon-adornment'>name</InputLabel>
          <Input id='input-with-icon-adornment' />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='input-with-icon-adornment'>city</InputLabel>
          <Input id='input-with-icon-adornment' />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='input-with-icon-adornment'>company</InputLabel>
          <Input id='input-with-icon-adornment' />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='input-with-icon-adornment'>phone</InputLabel>
          <Input id='input-with-icon-adornment' />
        </FormControl>
      </form>

      <AddButton />
    </li>
  );
}

export default ContactsForm;
