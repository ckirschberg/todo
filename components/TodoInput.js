import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native'

const TodoInput = props => {
    const [mytodo, setTodo] = useState('');
    const todoInputHandler = (enteredText) => {
        setTodo(enteredText);
      }
    const todoAddHandler = () => {
        setTodo('');
        props.onAddTodo(mytodo);
    };

    return (
    <View style={styles.container}>
        <TextInput placeholder="New Todo" onChangeText={todoInputHandler} value={mytodo}/>
        <Button title="Add Todo" onPress={todoAddHandler}></Button>
      </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default TodoInput