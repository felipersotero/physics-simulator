import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export default function Lists( props ) {
    return(
    <List.AccordionGroup>
        <ScrollView>
        <List.Accordion title={<Text style={styles.topicsText}>Cinemática</Text>} id="1" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" onPress={props.click} />
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
        <List.Accordion title={<Text style={styles.topicsText}>Termodinâmica</Text>} id="6" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Óptica</Text>} id="7" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Ondulatória</Text>} id="8" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Eletrostática</Text>} id="9" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Eletrodinâmica</Text>} id="10" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Eletromagnetismo</Text>} id="11" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        <List.Accordion title={<Text style={styles.topicsText}>Física Moderna</Text>} id="12" style={styles.topics}>
            <View style={styles.content}>
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
                <List.Item title="Item 1" />
            </View>
        </List.Accordion>
        </ScrollView>
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