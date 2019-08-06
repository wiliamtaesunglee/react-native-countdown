import React, { Component } from 'react';
import { View, Text, TouchableHightLight } from 'react-native';

class EventForm extends Component {
    handleAddPress = () => {
        this.props.navigation.navigate('list')
    }

    render() {
        return (
            <View>
                <TouchableHightLight
                    onPress={this.handleAddPress}
                >
                    <Text>
                        Add
                    </Text>
                </TouchableHightLight>
            </View>
        )
    }
}

export default EventForm;