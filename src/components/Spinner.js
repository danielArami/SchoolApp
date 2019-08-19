import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => {
    return (
        <ActivityIndicator style = {{alignSelf: 'center'}} size = { size || 'large' }/>
    );
};

export default Spinner;