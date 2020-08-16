import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { fetchRamdomIds } from '../util';

export default function RandomAsteroidListScreen({navigation}) {

    const [list, setList] = useState([])

    const getRandomAsteroidIdList = async() => {
        try {
            let list = []
            const data = await fetchRamdomIds();
            data.forEach(element => {
                list.push({id: element.id, name: element.name})
            });

            setList(list);
        } catch (error) {
            console.log("Unable to get the list of ID's")
        }
      }

    useEffect(() => {
        getRandomAsteroidIdList()
    }, []);

    const handleNavigation = (asteroidId) => {
        navigation.navigate("Details",{
            asteroidId
        });
    }

    return(
        <ScrollView>
            {
                list.length > 0 ?  
                    <React.Fragment>
                        {
                            list.map((item) => {
                                return(
                                    <TouchableOpacity 
                                        key={item.id}
                                        style={styles.idContainer}
                                        onPress={() => handleNavigation(item.id)}
                                    >
                                        <Text>{`ID: ${item.id}`}</Text>
                                        <Text>{`Name: ${item.name}`}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </React.Fragment>
                : 
                <Text>{"We're fetching the List of Id's. Please wait"}</Text> 
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    idContainer: {
        padding: 10, borderWidth: 1, marginVertical: 8, borderColor: "#00000060"
    }

})
