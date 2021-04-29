import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';// to add image in a page use ImageBackground from react-native
//import CarItem from './components/CarItem';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList /> 
      {/* <CarItem name={'Model X'} tagline={'Order Online For'} taglineCTA={'Touchless Delivery'}
      image={require('./assets/images/ModelX.jpeg')}/> using this line when having fewer things to display */} 
      
      <StatusBar style="auto" />
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
  
});
