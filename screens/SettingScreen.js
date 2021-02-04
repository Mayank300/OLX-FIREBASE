import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SettingScreen() {
    return (
        <View style={styles.container}>
            <Text>SETTING SCREEN</Text>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})