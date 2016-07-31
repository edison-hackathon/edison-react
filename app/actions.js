// actions

// switch to list
export const A_VIEW_LIST = 'A_VIEW_LIST';

// switch to one sensor details
export const A_VIEW_SENSOR = 'A_VIEW_SENSOR';

// refresh sensors data
export const A_REFRESH = 'A_REFRESH';


export function viewListAction() {
    return {
        type: A_VIEW_LIST
    }
}

export function viewSensorAction(currentSensore) {
    return {
        type: A_VIEW_SENSOR,
        currentSensor: currentSensore
    }
}

export function refreshDataAction(sensors) {
    // todo: async
    return {
        type: A_REFRESH,
        sensors: sensors
    }
}
