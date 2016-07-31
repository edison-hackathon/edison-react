// http://redux.js.org/docs/basics/Reducers.html
import {combineReducers, createStore} from "redux";
import {A_VIEW_LIST, A_VIEW_SENSOR, A_REFRESH} from "./actions";

// view values
export const VIEW_LIST = 'VIEW_LIST';
export const VIEW_SENSOR = 'VIEW_SENSOR';


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

function sensors(state = [], action) {
    switch (action.type) {
        case A_REFRESH:
            return action.sensors;
            break;

        default:
            return state
    }
}


let initialState = {
    view: VIEW_LIST,
    currentSensor: null,
    sensors: [
        {
            mac: '9092:3234:3434:ff00:3307:0030',
            temperature: 27.1,
            humidity: 39,
            speed: 2.4,
            lat: 55.751271,
            lon: 37.601955
        },
        {
            mac: '9092:3234:3434:ff00:3307:0031',
            temperature: 30.2,
            humidity: 70,
            speed: 7.58,
            lat: 55.731271,
            lon: 37.631955
        },
        {
            mac: '9092:3234:3434:ff00:3307:0032',
            temperature: 74.7,
            humidity: 39.20,
            speed: 0.01,
            lat: 55.851271,
            lon: 37.701955
        },
    ],
};

const reducers = combineReducers({
    view,
    currentSensor,
    sensors
});

const store = createStore(reducers, initialState);

export default store;
