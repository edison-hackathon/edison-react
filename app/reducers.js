// http://redux.js.org/docs/basics/Reducers.html
import {combineReducers, createStore} from "redux";
import {A_VIEW_LIST, A_VIEW_SENSOR} from "./actions";

// view values
const VIEW_LIST = 'VIEW_LIST';
const VIEW_SENSOR = 'VIEW_SENSOR';

let initialSensors = [
    {
        mac: '9092:3234:3434:ff00:3307:0030',
        t: 27.1,
    },
    {
        mac: '9092:3234:3434:ff00:3307:0031',
        t: 30.2,
    },
    {
        mac: '9092:3234:3434:ff00:3307:0032',
        t: 74.7,
    },
];

function view(state = VIEW_LIST, action) {
    switch (action.type) {
        case A_VIEW_LIST:
            return VIEW_LIST;
            break;

        case A_VIEW_SENSOR:
            return VIEW_SENSOR;
            break;

        default:
            return state;
    }
}

function currentSensor(state = null, action) {
    switch (action.type) {
        case A_VIEW_LIST:
            return null;
            break;

        case A_VIEW_SENSOR:
            return action.currentSensor;
            break;

        default:
            return state;
    }
}

function sensors(state = initialSensors, action) {
    switch (action.type) {
        default:
            return state
    }
}


export default combineReducers({
    view,
    currentSensor,
    sensors
});
