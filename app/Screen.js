import React, {Component, PropTypes} from "react";
import {View, StyleSheet} from "react-native";
import {connect} from "react-redux";
import Toolbar from "./Toolbar";
import Map from "./Map";
import SensorsListContainer from "./SensorsList";
import SensorDetails from "./SensorDetails";
import {VIEW_LIST} from "./store";
import {viewListAction, refreshDataAction} from './actions';

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
                <Map/>
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
                <Toolbar showBack={true} onBackClick={this.props.onBackClick} onRefreshClick={this.props.onRefreshClick}/>
                <Map/>
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

const ScreenContainter = connect(
    (state) => {
        console.log(state);
        return {
            isListView: (state.view == VIEW_LIST)
        }
    },
    (dispatch) => {
        return {
            onBackClick: () => {dispatch(viewListAction())},
            onRefreshClick: () => {dispatch(refreshDataAction())},
        }
    }
)(Screen);


export default ScreenContainter;
