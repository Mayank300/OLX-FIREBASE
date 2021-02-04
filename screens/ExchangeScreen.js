import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

const ExchangeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>ExchangeScreen Screen</Text>
        <Button 
          title="Go To Exchange Screen...again" 
          onPress={() => navigation.push("Exchange")}
         />
        <Button 
          title="Go To Home Screen" 
          onPress={() => navigation.navigate("Home")} 
         />
        <Button 
          title="Go Back" 
          onPress={() => navigation.goBack()}
         />
      </View>
    );
  }

export default ExchangeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})