import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";
import axios from "axios";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Pokemon({ navigation }) {
  const [dat, setData] = useState([]);
  async function getData() {
    let res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
    );
    setData(res.data.results);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ marginTop: ht * 0.01, paddingLeft: wd * 0.013 }}>
      <ImageBackground
        source={require("../assets/pikacho.png")}
        style={{ width: wd * 1, height: ht * 0.87, opacity: 0.8 }}
      >
        <StatusBar barStyle="light-content" />
        <ScrollView>
          {dat.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                borderWidth: wd * 0.006,
                width: wd * 0.97,
                marginTop: ht * 0.01,
                borderRadius: ht * 0.02,
                opacity: 1,
                height: ht * 0.1,
              }}
            >
              <View style={{ paddingLeft: wd * 0.03 }}>
                <Text
                  style={{
                    color: "chocolate",
                    fontWeight: "bold",
                    opacity: 1,
                    fontSize: ht * 0.023,
                  }}
                >
                  {item.name.toUpperCase()}
                </Text>
              </View>
              <View style={{ paddingLeft: wd * 0.03 }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("pokedata", { data: item.url })
                  }
                >
                  <Text
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                      opacity: 1,
                      fontSize: ht * 0.0215,
                    }}
                  >
                    {item.url}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default Pokemon;
