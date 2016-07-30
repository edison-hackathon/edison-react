import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView} from "react-native";
import {Toolbar} from './Toolbar';
import {Map} from './Map';

class ScrolledContainter extends Component {
    render() {
        return (
            <View style={styles.scrolledContainter}>
                <ScrollView>
                    {this.props.children}
                </ScrollView>
            </View>
        )
    }
}


class App extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Toolbar/>
                <Map/>
                <View style={{flex: 1, backgroundColor: "green", padding: 3}}>
                    <ScrolledContainter>
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
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                        <Text style={styles.welcome}>
                            Welcome to React Native!
                        </Text>
                    </ScrolledContainter>
                </View>
            </View>
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
    // sdf
    // scrolledContainter
    scrolledContainter: {
        flex: 1,
        flexDirection: 'column', // or row
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    // sdf
    container: {
        flex: 0,
        flexDirection: 'column', // or row
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 20,
    },
});

AppRegistry.registerComponent('edison', () => App);
