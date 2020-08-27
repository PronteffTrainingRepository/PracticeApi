import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GetCla from "./src/GetCla";
import GetFun from "./src/GetFun";
import SendData from "./src/SendData";
import Pokemon from "./src/Pokemon";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PokeData from "./src/PokeData";

const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <GetCla />
    //   <GetFun /> */}
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="pokemon">
        <Stack.Screen
          name="pokemon"
          component={Pokemon}
          options={{
            title: "List Of PokeMons",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="pokedata"
          component={PokeData}
          options={{
            title: "Pokemon's Information",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
