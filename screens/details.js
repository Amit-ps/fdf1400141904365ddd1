import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { fetchAsteroidDetailsUsingId } from '../util';

function DetailsScreen({ route, navigation }) {
  const {asteroidId} = route.params;
  const [asteroidDetails, setAsteroidDetails] = useState(null);
  const [errorMsg, setErrorMsg] = useState("")

  const getAsteroidDetailUsingId = async() => {
    try {
        const data = await fetchAsteroidDetailsUsingId(asteroidId);
        setAsteroidDetails(data);
    } catch (error) {
        setErrorMsg("Unable to get the details for given ID")
    }
  }

  useEffect(() => {
    if(errorMsg.length) {
      setTimeout(() => {
        navigation.navigate("Home")
      }, 3000);
    }
  }, [errorMsg])

  useEffect(() => {
    getAsteroidDetailUsingId()
  }, []);

    return (
      <View style={styles.container}>
        {
          asteroidDetails ? 
          <View>
            <Text style={styles.label}>{"NAME: "}</Text>
            <Text style={styles.valueOfLabel}>{(asteroidDetails.name)}</Text>
            <Text style={styles.label}>{"NASA_JPL_URL: "}</Text>
            <Text style={styles.valueOfLabel}>{(asteroidDetails.nasa_jpl_url)}</Text>
            <Text style={styles.label}>{"IS_HAZARDOUS: "}</Text>
            <Text style={styles.valueOfLabel}>{(asteroidDetails.is_potentially_hazardous_asteroid).toString()}</Text>
          </View>
          : 
          <View>
            {
              errorMsg.length > 0 ? <Text style={styles.error}>{errorMsg}</Text> :
            <Text>Please wait. We're fetching the details</Text>
            } 
            </View>
        }
      </View>
    );
  }

  export default DetailsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1, paddingHorizontal:15
    },
    label: {
      fontSize: 20, paddingTop: 20
    },
    valueOfLabel: {
      fontStyle: "italic", paddingTop: 10
    },
    error: {
      color: "red"
    }
  })
  