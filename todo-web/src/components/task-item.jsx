import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem({ onRemove, onUpdate, id, done, desc }) {
  const [internalDesc, setInternalDesc] = useState(desc);
  const [internalDone, setInternalDone] = useState(done);

  return (
    <Paper elevation={8}>
      <Stack direction={'row'} spacing={1} padding={2}>
        <Checkbox
          onChange={ev => setInternalDone(ev.target.checked)}
          onBlur={() =>
            onUpdate({ id, desc: internalDesc, done: internalDone })
          }
          checked={internalDone}
        />
        <TextField
          fullWidth
          size='small'
          onChange={ev => setInternalDesc(ev.target.value)}
          onBlur={() =>
            onUpdate({ id, desc: internalDesc, done: internalDone })
          }
          value={internalDesc}
        />
        <IconButton onClick={() => onRemove(id)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}
