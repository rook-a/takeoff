import { Button } from '@mui/material';

function AddButton(): JSX.Element {
  return (
    <Button
      type='submit'
      variant='outlined'
      style={{ width: '200px', alignSelf: 'center' }}>
      add new item
    </Button>
  );
}

export default AddButton;
