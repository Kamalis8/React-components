/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CheckBox, colors} from 'react-native-elements';

const data = [
  {
    name: 'Task 1',
  },
  {
    name: 'Task 2',
  },
  {
    name: 'Task 3',
  },
  {
    name: 'Task 4',
  },
  {
    name: 'Task 5',
  },
];

const App = () => {
  const [isSelectedItem, setSelectedItem] = useState<string[]>([]);

  const toggleItem = (name: string) => {
    setSelectedItem(prevState =>
      prevState.includes(name)
        ? prevState.filter(item => item !== name)
        : [...prevState, name],
    );
  };

  const renderItem = ({item}) => {
    const isCompleted = isSelectedItem.includes(item.name);

    <View style={styles.conview}>
      <View style={styles.container}>
        <CheckBox
          checked={isCompleted}
          checkedTitle="Task completed"
          style={styles.checkbox}
          onPress={() => toggleItem(item.name)}
        />
        <View>
          <Text style={styles.text}>{item.name}</Text>
          {isCompleted && <Text>Task completed</Text>}
        </View>
      </View>
    </View>;
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  conview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default App;
