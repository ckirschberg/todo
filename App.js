import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {

  //1: Set up const [mytodo, setTodo] = useState(''); (state) and 
  // <TextInput placeholder="New Todo" value={mytodo}/>
  
  //2 Set up:
  // const todoInputHandler = (enteredText) => {
  //   setTodo(enteredText);
  // } 
  // and
  //<TextInput placeholder="New Todo" onChangeText={todoInputHandler} value={mytodo}/>
  //  console.log the enteredText

  //3 A button
  //const [mytodos, addTodo] = useState([]); (saving all todos in the component state)
  // <Button title="Add Todo" onPress={onTodoHandler}></Button>
  // const onTodoHandler = () => {
  //  addTodo(currentTodos => [...currentTodos, mytodo]);
  //   setTodo('');
  // }

  // SE 4: Look into how to use a FlatList. Display all todos with a FlatList. Add a key property to our todos, to avoid warning.
  // SE 5: What is the difference between FlatList and ScrollView? 

  // 6 Splitting up into multiple components
//   import React from 'react';
// import { View, Text } from 'react-native'
  // Create a new TodoItem component
//   const TodoItem = props => {
//     return (
      // <View>
      //   <Text>{props.title}</Text>
      // </View>
//     );
// };
  //export default TodoItem;
// Using the component in another component
// <TodoItem title={itemData.item.value}/>

// SE: Create a component for TodoInput (the TextInput and Button).
// For this you will have to move part of the state from the App.js to TodoInput.js
// I will show you how to handle clicking the button, so stop before that.

// Passing a variable from one component to a function defined in the
// parent component
//<Button title="Add Todo" onPress={props.onAddTodo.bind(this, mytodo)}></Button>
// Now this function must take a parameter:
//  const onTodoHandler = (todoTitle) => {
  //   addTodo(currentTodos => [...currentTodos, {key: Math.random().toString(), value: todoTitle}]);
  // }

  // SE: Research the TouchableOpacity component. Use it to click a TodoItem to execute code that
  // deletes the TodoItem.

  // My solution:
  // <TouchableOpacity onPress={props.onDelete}>
  //     <View>
  //         <Text>{props.title}</Text>
  //     </View>
  // </TouchableOpacity>
  
  //<TodoItem onDelete={removeTodoHandler.bind(this, itemData.item.key)} title={itemData.item.value}/>
  // const removeTodoHandler = todoKey => {
  //   addTodo(currentTodos => currentTodos.filter(todo => todo.key !== todoKey));
  // }


  const [mytodos, addTodo] = useState([]);

  const removeTodoHandler = todoKey => {
    addTodo(currentTodos => currentTodos.filter(todo => todo.key !== todoKey));
  }

  const onTodoHandler = (todoTitle) => {
    //FlatList must have key property to not throw a warning
    // addTodo(currentTodos => [...currentTodos, mytodo]);
    addTodo(currentTodos => [...currentTodos, {key: Math.random().toString(), value: todoTitle}]);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.container}></View>
       { <TextInput placeholder="New Todo" onChangeText={todoInputHandler} value={mytodo}/>
        <Button title="Add Todo" onPress={onTodoHandler}></Button> }
      </View>
       */}
      <TodoInput onAddTodo={onTodoHandler}/>
      <View style={styles.container}>
        <FlatList data={mytodos} renderItem={itemData => (
          <TodoItem onDelete={removeTodoHandler.bind(this, itemData.item.key)} 
            title={itemData.item.value}/>
          // <View>
          //   <Text>{itemData.item.value}</Text>
          // </View>
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
