import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView} from "react-native";
import {Provider} from "react-redux";
import {createStore, bindActionCreators} from 'redux';
import Toolbar from "./Toolbar";
import Map from "./Map";
import List from "./List";
import * as actions from './actions';
import reducers from './reducers';

// init
let store = createStore(reducers);

// bindActionCreators(actions, store.dispatch);



// test
console.log(store.getState());

let unsubscriber = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(actions.viewSensor('9092:3234:3434:ff00:3307:0030'));
store.dispatch(actions.viewList());

unsubscriber();



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
                        <List>
                            <Text style={styles.welcome}>
                                Welcome to React Native!
                            </Text>
                            <Text style={styles.welcome}>
                                Welcome to React Native!
                            </Text>
                            <Text style={styles.welcome}>
                                Welcome to React Native!
                            </Text>
                            <Text style={styles.welcome}>
                                Welcome to React Native!
                            </Text>
                        </List>
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
