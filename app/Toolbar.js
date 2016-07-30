import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

class Toolbar extends Component {
    render() {
        return (
            <View>
                <View style={s.toolbar}>
                    <Text style={s.toolbarButton}>Back</Text>
                    <Text style={s.toolbarTitle}>Edison sensors</Text>
                    <Text style={s.toolbarButton}>Refresh</Text>
                </View>
            </View>
        );
    }
}

const s = StyleSheet.create({
    toolbar: {
        backgroundColor: '#81c04d',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    toolbarButton: {
        width: 80,
        color: '#fff',
        textAlign: 'center'
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1
    },
});


export default Toolbar;
