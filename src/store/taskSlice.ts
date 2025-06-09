import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  status?: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = { tasks: [] };

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
  },
});

export const { setTasks, addTask } = taskSlice.actions;
export default taskSlice.reducer;