import { useLinkProps } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet, Text } from "react-native";

export default function Header(props) {
    return(
        <View style={styles.container}>
            <View style={styles.buttonArea}>
            </View>
            <View style={styles.title}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <View style={styles.buttonArea}></View>
        </View>
    );    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5271FF',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#3f5ae0',
        borderBottomWidth: 3,
    },
    buttonArea:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        flex: 2,
        alignItems: 'center',
    },
    text:{
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold'
    }
})