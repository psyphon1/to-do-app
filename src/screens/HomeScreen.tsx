import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import { fetchTasks, createTask } from '../services/api';
import { useAuthStore } from '../store/authStore';
import { useTaskStore } from '../store/taskStore';

export default function HomeScreen({ navigation }) {
  const token = useAuthStore((state) => state.token);
  const tasks = useTaskStore((state) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);
  const addTask = useTaskStore((state) => state.addTask);

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (token) {
      fetchTasks(token)
        .then(res => setTasks(res.data))
        .catch(() => {});
    }
  }, [token]);

  const handleAddTask = async () => {
    if (!title) return;
    try {
      const res = await createTask(token, { title });
      addTask(res.data);
      setTitle('');
    } catch {
      alert('Failed to add task');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text
            style={styles.task}
            onPress={() => navigation.navigate('TaskDetail', { task: item })}
          >
            {item.title}
          </Text>
        )}
      />
      <TextInput
        placeholder="New Task"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 40 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 8, borderRadius: 4 },
  task: { fontSize: 18, padding: 8, borderBottomWidth: 1, borderColor: '#eee' },
}); 