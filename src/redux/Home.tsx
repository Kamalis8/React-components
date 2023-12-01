// TodoList.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from '../redux/Actions';

const TodoList = ({todos, dispatchAddTodo, dispatchRemoveTodo}) => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    dispatchAddTodo(todoText);
    setTodoText('');
  };

  const handleRemoveTodo = id => {
    dispatchRemoveTodo(id);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your todo"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button title="Add" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  dispatchAddTodo: text => dispatch(addTodo(text)),
  dispatchRemoveTodo: id => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
