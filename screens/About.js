import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Menu } from 'react-native-paper';

export default function About({navigation}) {

    const MyComponent = () => (
        <View style={{ flex: 1 }}>
          <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
          <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
          <Menu.Item leadingIcon="content-cut" onPress={() => {}} title="Cut" disabled />
          <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" disabled />
          <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
        </View>
      );

    
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <MyComponent />
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
});
