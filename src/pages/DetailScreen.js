import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function DetailScreen( {navigation} ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailScreen</Text>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()}>
            <Text>Voltar</Text>
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