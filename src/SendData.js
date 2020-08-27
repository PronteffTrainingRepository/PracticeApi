import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
function SendData() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [relyear, SetRelYear] = useState("");
  handleSubmit = () => {
    axios.post("https://reactnative.dev/movies.json");
  };
  return (
    <View>
      <Text style={{ fontSize: 20 }}>hello World</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Release Year"
        onChangeText={(text) => SetRelYear(text)}
      />
      <View style={{ width: 100, alignSelf: "center", marginTop: 10 }}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: "white", textAlign: "center", marginTop: 5 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    width: 250,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 20,
    //Width: 100,
    height: 30,
  },
});
export default SendData;
