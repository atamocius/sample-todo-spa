import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TaskForm({ onAdd }) {
  const [desc, setDesc] = useState('');

  return (
    <>
      <TextField
        fullWidth
        label='Enter task here'
        size='small'
        onChange={ev => setDesc(ev.target.value)}
        value={desc}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          onAdd({ desc, done: false });
          setDesc('');
        }}
      >
        Add
      </Button>
    </>
  );
}
