import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import React from 'react';
import { Banner } from 'react-native-paper';

export default function Home({navigation}) {

  const [number, setNumber] = useState(1);

  const MyComponent = () => {
    const [checked, setChecked] = React.useState(false);
  
    return (
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    );
  };
  const check = () => {
    if(number == 1) {
      console.log("One");

    } else if (number == 2) {
      console.log("TWO");

    } else if (number == 3){
      navigation.push('About');
    }
    setNumber(number+1);
  }
  

    return (
        <View style={styles.container}>
          <View style={styles.checkMark}>
          <Text>Are you ready to the next page?</Text>
          <MyComponent />
          </View>
    
            <TouchableOpacity onPress={() => check()}
              style={number === 1 ? styles.btnBlue :
                     number === 2 ? styles.btnRed : styles.btnGreen }>
                <Text>Click Me 4 times to see whats gonna happen next!</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    checkMark: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center'
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnRed: {
      alignItems: 'center',
      backgroundColor: '#800000',
      borderColor: '#800000',
      borderRadius: 10,
      borderWidth: 1,
      padding: 10
  },
  btnGreen: {
    alignItems: 'center',
    backgroundColor: '#00563B',
    borderColor: '#00563B',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10
}

});
