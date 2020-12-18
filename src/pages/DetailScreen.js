import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';

import Header from '../components/Header';

export default function DetailScreen( {navigation} ) {
    return (
      <View style={styles.container}>
        <Header title={"Detaillllll"} />
        <View style={styles.content}>
          <Text>DetailScreen</Text>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.goBack()}>
              <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },
    content:{
      flex: 9,
      alignItems: 'center'
    },
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