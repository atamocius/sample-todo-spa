import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Filters from './components/filters';
import TaskForm from './components/task-form';
import TaskItem from './components/task-item';

import useTasksStore from './stores/tasks';

export default function App() {
  const api = useTasksStore();

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            To-Do
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth='sm'>
        <Filters
          onChange={ev => api.updateAndRunFilter(ev.target.value)}
          value={api.filter}
        />

        <Stack direction={'row'} spacing={1} padding={2}>
          <TaskForm onAdd={data => api.add(data)} />
        </Stack>

        <Stack spacing={2} padding={2}>
          {api.tasks.map(x => (
            <TaskItem
              key={x.id}
              onUpdate={task => api.update(task)}
              onRemove={id => api.remove(id)}
              id={x.id}
              done={x.done}
              desc={x.desc}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
