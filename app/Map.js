import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView, Dimensions} from "react-native";
import {connect} from "react-redux";
import {getCurrentSensor} from "./store";

var MapView = require('react-native-maps');
let {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;

const LATITUDE = 55.751271;
const LONGITUDE = 37.601955;
const LATITUDE_DELTA = 0.0422;
const LONGITUDE_DELTA = 0.0421;

class Map extends Component {

    renderObjs() {

        if (this.props.sensor) {
            sen = this.props.sensor;
            console.log({latitude: sen.lat, longitude: sen.lon});
            return (
                <MapView.Marker
                    coordinate={{latitude: sen.lat, longitude: sen.lon}}
                    title={sen.mac}
                />
            )
        }

        return this.props.sensors.map(function(sen, i) {
            return (
                <MapView.Marker
                    key={i}
                    coordinate={{latitude: sen.lat, longitude: sen.lon}}
                    title={sen.mac}
                />
            )
        });

        // return this.state.objs.map(function (o) {
        //     return (
        //         <MapView.Marker
        //             coordinate={{latitude: o.lat, longitude: o.lon}}
        //             title={o.title}
        //             key={o.id}
        //         />
        //     )
        // });
    }

    render() {
        return (
            <View style={s.view}>
                <MapView
                    ref={(ref) => {this._zimap = ref}}
                    style={s.map}
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                    {this.renderObjs()}
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


// container component
const MapContainer = connect(
    // returns props as data from global state
    (state) => {
        return {
            sensor: getCurrentSensor(state),
            sensors: state.sensors
        }
    }
)(Map);


export default MapContainer;
