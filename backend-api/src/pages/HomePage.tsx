import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../services/api';
import { setTasks } from '../store/taskSlice';
import { RootState } from '../store';

export default function HomePage() {
  const token = useSelector((state: RootState) => state.auth.token);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetchTasks(token).then(res => dispatch(setTasks(res.data)));
    }
  }, [token, dispatch]);

  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.title}</li>)}
      </ul>
    </div>
  );
}