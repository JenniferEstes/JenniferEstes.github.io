import { View, Text } from 'react-native';
import React from "react";

export default function Profile() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <StatusBar style="auto" />
      </View>
    ); 
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#25292e'
    },
  });