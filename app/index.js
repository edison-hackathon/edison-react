import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView} from "react-native";
import {Provider} from "react-redux";
import ScreenContainter from './Screen';
import store from "./store";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ScreenContainter/>
            </Provider>
        );
    }
}


AppRegistry.registerComponent('edison', () => App);
