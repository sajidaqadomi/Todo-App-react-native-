
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffe', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
    { text: 'play on the switch', key: '4' },
    { text: 'play on the switch', key: '5' }
  ])

  const deletTodo = (k) => {
    setTodos((oldTodos) => oldTodos.filter((item) => item.key !== k))
  }

  const addTodo = (text) => {
    text.length > 3 ? (
      setTodos([...todos, { text, key: Math.random().toString() }])
    ) :
      (
        Alert.alert('ooops', 'Todos Must Be Over 3  Char long', [{
          text: 'understood',
          onPress: () => console.log('close alert')
        }])
      )

  }
  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content} >
          <AddTodo addTodo={addTodo} />
          <TodoItem todos={todos} deletTodo={deletTodo} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    flex: 1,
    padding: 20



  }

});
