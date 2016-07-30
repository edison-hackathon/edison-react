import React, { Component } from 'react';
import { ScrollView } from 'react-native';

class List extends Component {
    render() {
        return (
            <ScrollView>
                {for datum in this.props.data {

                }}
            </ScrollView>
        )
    }
};
