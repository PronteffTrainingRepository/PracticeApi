import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";
class GetCla extends Component {
  constructor() {
    super();
    this.state = {
      dat: [],
      titles: "",
      des: "",
    };
  }
  componentDidMount() {
    this.getData();
  }
  async getData() {
    let res = await axios.get("https://reactnative.dev/movies.json");
    this.setState({ dat: res.data.movies });
    this.setState({ titles: res.data.title });
    this.setState({ des: res.data.description });
  }
  render() {
    return (
      <View
        style={{
          borderRadius: 10,
          borderWidth: 2,
          marginBottom: 20,
          width: 350,
        }}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "red",
              marginBottom: 10,
              fontSize: 18,
            }}
          >
            Class Component
          </Text>
        </View>
        <Text>{this.state.titles}</Text>
        <Text>{this.state.des}</Text>
        {this.state.dat.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text>{item.id} </Text>
            <Text>{item.title}</Text>
            <Text>{item.releaseYear}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default GetCla;
