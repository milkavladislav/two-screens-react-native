import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")


  const retrieveData = async () => {
    try {
      const name = await AsyncStorage.getItem('@name');
      if (name !== null) {
        setName(name)
      }
      
      const surname = await AsyncStorage.getItem('@surname');
      if (surname !== null) {
        setSurname(surname)
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    retrieveData()
  }, [])
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {surname + " " + name}</Text>
      <Button
          title={"Refresh data"}
          onPress={() => {
            retrieveData();
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
