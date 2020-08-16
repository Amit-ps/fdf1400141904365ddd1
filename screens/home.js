import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function HomeScreen({ navigation }) {
    const [asteroidId, setAsteroidId] = useState("");

    const handleNavigation = (screenName) => {
        if(screenName === "Details") {
            navigation.navigate(screenName,{
                asteroidId
            });
        } else {
            navigation.navigate('RandomList');
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TextInput
            placeholder="Enter Asteroid ID"
            value={asteroidId}
            onChangeText={(e) => setAsteroidId(e)}
            style={styles.inputField}  
            />
            <View>
            <Button
                disabled={!!!asteroidId.length}
                title="Submit"
                onPress={() => handleNavigation("Details")}
            />
    
            <Button
                title="Random Asteroid"
                onPress={() => handleNavigation("RandomList")}
            />
    
            </View>
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputField: {
        height: 35, width: "60%", borderColor: "#00000080", borderWidth: 1
    }
  });

  export default HomeScreen;

  