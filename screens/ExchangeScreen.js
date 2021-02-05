import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

import { useTheme } from 'react-native-paper';

const ExchangeScreen = ({ navigation }) => {

  // const [pName, setPName] = useState('');

  const { colors } = useTheme();


    return (
      <View style={styles.container}>
        <Text>mayank</Text>
        <TextInput 
          placeholder="Your Email"
          placeholderTextColor="#666666"
          // style={[styles.textInput, {
          //     color: colors.text
          // }]}
          autoCapitalize="none"
          //onChangeText={(text) => setPName(text)}
          />      
        <Text>mayank</Text>
      </View>
    );
  }

export default ExchangeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
    },
})