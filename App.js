import React, {Component} from "react";
import {StyleSheet} from 'react-native';
import Lista from "./components/Lista";
import detallesLista from "./components/detallesLista";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends Component {
 
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Lista">
          <Stack.Screen name="Superheroes" component={Lista} />
          <Stack.Screen name="DetallesHeroes" component={detallesLista} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

