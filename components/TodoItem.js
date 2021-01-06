import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

const TodoItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TodoItem;