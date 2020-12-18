import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

export default function Lists() {
    return(
    <List.AccordionGroup>
        <View>
        <List.Accordion title={<Text style={styles.topicsText}>Cinemática</Text>} id="1" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Dinâmica</Text>} id="2" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Estática</Text>} id="3" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Fluidos</Text>} id="4" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Termologia</Text>} id="5" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        </View>
    </List.AccordionGroup>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    topics:{
        backgroundColor: '#5271FF',
        marginTop: 3,
        marginHorizontal: 5,
        borderRadius: 20,
    },
    topicsText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    content: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,

    }

})