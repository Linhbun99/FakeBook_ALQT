import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

function LogIn() {
    const [value, setValue] = useState('');

    function handleChange(event) {
        event.preventDefault();
    }


    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={e => handleChange(e)}
            value={value}
            keyboardType='numeric'
        />
    )
}

export default LogIn




