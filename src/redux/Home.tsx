import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/Actions';
import Appconstantcolor from '../assets/Appconstantcolor';

export default function Home() {
  const dispatch = useDispatch();

  const count = useSelector(store => store.count.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter_text}>{count}</Text>

      <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
        <Text style={styles.btn_text}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDecrement} style={styles.btn}>
        <Text style={styles.btn_text}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
  },
  btn: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Appconstantcolor.black1,
  },
  btn_text: {
    fontSize: 23,
    color: Appconstantcolor.black1,
  },
});
