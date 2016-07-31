import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

class Toolbar extends Component {
    render() {
        let back = (
            <Text style={s.toolbarButton}/>
        );
        if (this.props.showBack) {
            back = (
                <Text style={s.toolbarButton} onPress={this.props.onBackClick}>Back</Text>
            );
        }
        return (
            <View>
                <View style={s.toolbar}>
                    {back}
                    <Text style={s.toolbarTitle}>Edison sensors</Text>
                    <Text style={s.toolbarButton} onPress={this.props.onRefreshClick}>Refresh</Text>
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
