import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:4000';

export default function useTasksStore() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);

  const getAll = async () => {
    try {
      const res = await fetch(`${BASE_URL}/items`);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getAllUndone = async () => {
    try {
      const res = await fetch(`${BASE_URL}/items/undone`);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getAllDone = async () => {
    try {
      const res = await fetch(`${BASE_URL}/items/done`);
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const runFilter = async filter => {
    switch (filter) {
      case 'undone':
        await getAllUndone();
        break;
      case 'done':
        await getAllDone();
        break;
      default: // 'all'
        await getAll();
        break;
    }
  };

  const api = {
    filter,
    tasks,

    updateAndRunFilter: async newFilter => {
      setFilter(newFilter);
      await runFilter(newFilter);
    },

    add: async task => {
      try {
        const res = await fetch(`${BASE_URL}/add`, {
          method: 'POST',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify(task),
        });
        if (!res.ok) {
          console.error('Unable to add task.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        await runFilter(filter);
      }
    },

    update: async task => {
      try {
        const res = await fetch(`${BASE_URL}/update`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify(task),
        });
        if (!res.ok) {
          console.error('Unable to update task.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        await runFilter(filter);
      }
    },

    remove: async id => {
      try {
        const res = await fetch(`${BASE_URL}/remove/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          console.error('Unable to remove task.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        await runFilter(filter);
      }
    },
  };

  useEffect(() => {
    getAll();
  }, []);

  return api;
}
