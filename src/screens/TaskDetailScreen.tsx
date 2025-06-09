import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function TaskDetailScreen() {
  const route = useRoute();
  // Safely extract the task from route params
  const { task } = route.params as { task: {
    title: string;
    description?: string;
    priority?: string;
    status?: string;
    dueDate?: string;
  } };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>Description: {task.description || 'No description'}</Text>
      <Text>Priority: {task.priority || 'None'}</Text>
      <Text>Status: {task.status || 'Pending'}</Text>
      <Text>Due: {task.dueDate ? new Date(task.dueDate).toLocaleString() : 'No due date'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 40 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});