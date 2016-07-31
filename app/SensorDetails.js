import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import List from "./List";
import ListButton from "./ListButton";
import {viewSensorAction} from "./actions";

// visible component
class SensorsDetails extends Component {
    render() {
        return (
            <List>
                {this.props.sensors.map((sensor, i) =>
                    <ListButton
                        key={i}
                        onClick={() => this.props.onSensorClick(sensor.mac)}
                    >
                        {" details" + sensor.mac + '\n' + sensor.temperature + ' °C'}
                    </ListButton>
                )}
            </List>
        )
    }
}

SensorsDetails.propTypes = {
    sensors: PropTypes.arrayOf(PropTypes.shape({
        mac: PropTypes.string.isRequired,
        temperature: PropTypes.float,
    }).isRequired).isRequired,
    onSensorClick: PropTypes.func.isRequired
};


// container component
const SensorsDetailsContainer = connect(
    // returns props as data from global state
    (state) => {
        return {
            sensors: state.sensors
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
