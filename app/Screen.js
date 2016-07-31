import React, {Component, PropTypes} from "react";
import {View, StyleSheet} from "react-native";
import {connect} from "react-redux";
import Toolbar from "./Toolbar";
import MapContainer from "./Map";
import SensorsListContainer from "./SensorsList";
import SensorDetails from "./SensorDetails";
import {VIEW_LIST} from "./store";
import {viewListAction, refreshDataAction} from "./actions";

class Screen extends Component {

    render() {
        console.log(this.props.isListView);
        if (this.props.isListView) {
            return this.renderList()
        }

        return this.renderSensor();
    }

    renderList() {
        return (
            <View style={styles.container}>
                <Toolbar showBack={false} onRefreshClick={this.props.onRefreshClick}/>
                <MapContainer/>
                <View style={styles.content}>
                    <SensorsListContainer/>
                </View>
                <View style={styles.footer}/>
            </View>
        )
    }

    renderSensor() {
        return (
            <View style={styles.container}>
                <Toolbar showBack={true} onBackClick={this.props.onBackClick}
                         onRefreshClick={this.props.onRefreshClick}/>
                <MapContainer/>
                <View style={styles.content}>
                    <SensorDetails/>
                </View>
                <View style={styles.footer}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', // or row
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#ff6600"
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "green",
        padding: 3
    },
    footer: {
        height: 10,
        backgroundColor: 'purple'
    }
});


function refreshAsync(dispatch) {

    // setTimeout(function() {
    //
    //     dispatch(refreshDataAction([
    //         {
    //             mac: 'new',
    //             temperature: 30.2,
    //             humidity: 70,
    //             speed: 7.58,
    //             lat: 55.731271,
    //             lon: 37.631955
    //         }
    //     ]));
    //
    // }, 1000);
    // return;


    console.log('fetch...');
    fetch("http://localhost:8080/api/v1/devices?offset=0&limit=10", {
        // mode: "no-cors",
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(function (response) {
            response.json().then(function (json) {
                let sensors = json;
                console.log(response);
                console.log(sensors);
                let def = {
                    mac: '9092:3234:3434:ff00:3307:0031',
                    temperature: 30.2,
                    humidity: 70,
                    speed: 7.58,
                    lat: 55.731271,
                    lon: 37.631955
                };

                sensors = sensors.map(function (sensor) {
                    return {
                        ...def,
                        ...sensor
                    }
                });

                console.log(sensors);
                dispatch(refreshDataAction(sensors));
            })
        })
        .catch(function (error) {
            console.log(error);
            dispatch(viewListAction())
        });
}

const ScreenContainter = connect(
    (state) => {
        console.log(state);
        return {
            isListView: (state.view == VIEW_LIST),
        }
    },
    (dispatch) => {
        return {
            onBackClick: () => {
                dispatch(viewListAction())
            },
            onRefreshClick: () => {
                refreshAsync(dispatch)
            },
        }
    }
)(Screen);


export default ScreenContainter;
