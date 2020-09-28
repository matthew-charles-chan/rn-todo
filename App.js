import React from 'react';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View  style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="ToDo Item"
          style={styles.textInput}
        />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%'
  }
})
