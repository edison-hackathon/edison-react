import React, {Component, PropTypes} from "react";
import {Text, StyleSheet} from "react-native";

// visible component
class ListButton extends Component {
    render() {
        return (
            <Text style={s.welcome} onPress={this.props.onClick}>
                {this.props.children}
            </Text>
        )
    }
}

ListButton.propTypes = {
    onClick: PropTypes.func,
};

const s = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'left',
        margin: 20,
    },
});


export default ListButton;
