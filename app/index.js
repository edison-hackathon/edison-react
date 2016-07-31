import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import Toolbar from "./Toolbar";
import Map from "./Map";
import SensorsListContainer from "./SensorsList";
import store from "./store";

// App
class Content extends Component {
    render() {
        return (
            <View style={styles.content}>
                {this.props.children}
            </View>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}/>
        )
    }
}


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.mainContainer}>
                    <Toolbar/>
                    <Map/>
                    <Content>
                        <SensorsListContainer/>
                    </Content>
                    <Footer/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    // main
    mainContainer: {
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
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 20,
    },
});

AppRegistry.registerComponent('edison', () => App);
