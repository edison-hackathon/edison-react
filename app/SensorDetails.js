import React, {Component, PropTypes} from "react";
import {View, Text, StyleSheet} from "react-native";
import {connect} from "react-redux";
import List from "./List";
import ListButton from "./ListButton";
import {viewSensorAction} from "./actions";

// visible component
class SensorsDetails extends Component {
    render() {
        s = this.props.sensor;
        if (!s) {
            return null;
        }
        onClick = () => {
        };
        return (
            <View style={styles.list}>
                <Text style={styles.mac}>{"MAC:\n" + s.mac}</Text>
                <List>
                    <ListButton onClick={onClick}>
                        {"Temperature:\n" + s.temperature + " °C"}
                    </ListButton>

                    <ListButton onClick={onClick}>
                        {"Humidity:\n" + s.humidity + "%"}
                    </ListButton>

                    <ListButton onClick={onClick}>
                        {"Latitude:\n" + s.lat}
                    </ListButton>

                    <ListButton onClick={onClick}>
                        {"Longitude:\n" + s.lon}
                    </ListButton>
                </List>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    mac: {
        fontSize: 15,
        textAlign: 'left',
        margin: 20,
        backgroundColor: "gray",
    }
});

function getCurrentSensor(state) {
    if (!state.currentSensor) {
        return null;
    }

    let currentSensor = null;
    state.sensors.forEach(function (sensor) {
        if (sensor.mac == state.currentSensor) {
            currentSensor = sensor;
        }
    });

    if (!currentSensor) {
        return null;
    }

    return currentSensor;
}


// container component
const SensorsDetailsContainer = connect(
    // returns props as data from global state
    (state) => {
        return {
            sensor: getCurrentSensor(state)
        }
    },
    // retuns props as callbacks
    (dispatch) => {
        return {
            onSensorClick: (mac) => {
                dispatch(viewSensorAction(mac))
            }
        }
    }
)(SensorsDetails);


export default SensorsDetailsContainer;
