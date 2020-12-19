import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Card, ActivityIndicator } from "react-native-paper";

import Constants from "expo-constants";

import Header from "../components/Header";
import Lists from '../components/Lists';

export default function HomeScreen( {navigation} ) {
    return (
      <View style={styles.container}>
        <Header title={"Simulador"} />
        <View style={styles.content}>
          {/* <Text>Home Screen</Text>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Detail')}>
              <Text>Mudar tela</Text>
          </TouchableOpacity> */}
          <Lists click={()=>navigation.navigate('Detail')} />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D9D9D9',
      paddingTop: Constants.statusBarHeight
    },
    content: {
      flex: 6,
      paddingBottom: 5,
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