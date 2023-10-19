/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View>
            <View style={styles.container}>
              <Text style={styles.heading}> Deactivate Account </Text>
              <Text style={styles.text}>
                Are you sure u want to deactivate your account? All your date
                will be permentaly removed.This action cannot be undone.
              </Text>
              <View style={styles.button}>
                <TouchableOpacity style={styles.can}>
                  <Text style={styles.textcan}>Cancel</Text>
                </TouchableOpacity>
                <View style={styles.space} />
                <TouchableOpacity style={styles.deactive}>
                  <Text style={styles.textdeactive}>Deactivate</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.heading}>Click here to Deactivate</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  heading: {
    fontsize: 60,
    fontweight: 'bold',
    color: 'black',
    marginTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    paddingLeft: 8,
  },
  text: {
    //marginLeft: 15,
    paddingLeft: 20,
  },
  deactive: {
    backgroundColor: 'red',
  },
  can: {
    backgroundColor: 'white',
  },
  textcan: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    borderWidth: 1,
    borderColor: 'grey',
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 8,
    paddingBottom: 12,
  },
  textdeactive: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 8,
    padding: 6,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  space: {
    width: 20,
  },
});

export default App;
