import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen( {navigation} ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Detail')}>
            <Text>Mudar tela</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 120,
        backgroundColor: 'lightblue',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
  })