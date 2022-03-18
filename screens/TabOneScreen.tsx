import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        '@name',
        name
      );
      await AsyncStorage.setItem(
        '@surname',
        surname
      );
    } catch (error) {
      console.log(error)
    }
  };

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={name}  placeholder={"name"} onChangeText={setName}/>
      <TextInput style={styles.input} value={surname}  placeholder={"surname"} onChangeText={setSurname}/>
      <Button
          title={"Second screen"}
          onPress={() => {
            storeData();
            navigation.jumpTo('TabTwo')
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
