import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";
var MapView = require('react-native-maps');
var {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0422;
const LONGITUDE_DELTA = 0.0421;

class Map extends Component {
    render() {
        return (
            <View style={s.view}>
                <MapView
                    style={s.map}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                </MapView>
            </View>
        )
    }
}

const s = StyleSheet.create({
    view: {
        flexDirection: 'column',
    },
    map: {
        padding: 3,
        width: width,
        height: 200
        // backgroundColor: "purple",
    },
    text: {
        backgroundColor: "gray",
    }
});

export default Map;
