import React, {Component} from "react";
import {View, ScrollView, StyleSheet} from "react-native";

class List extends Component {
    render() {
        return (
            <View style={s.list}>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </View>
        )
    }
}

const s = StyleSheet.create({
    list: {
        flex: 1,
        flexDirection: 'column', // or row
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default List;
