import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

class Map extends Component {
    render() {
        return (
            <View style={s.map}>
                <Text style={s.text}>map</Text>
            </View>
        )
    }
}

const s = StyleSheet.create({
    map: {
        height: 200,
        padding: 3,
        backgroundColor: "purple",
    },
    text: {
        backgroundColor: "gray",
    }
});


module.exports = {Map};
