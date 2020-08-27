import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
function GetFun() {
  const [dat, setData] = useState([]);
  const [titles, setTitles] = useState([]);
  const [des, setDes] = useState([]);
  async function getData() {
    let res = await axios.get("https://reactnative.dev/movies.json");
    setData(res.data.movies);
    setTitles(res.data.title);
    setDes(res.data.description);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{ borderRadius: 10, borderWidth: 2, marginBottom: 20, width: 350 }}
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
          Functional Component
        </Text>
      </View>
      <Text> {titles}</Text>
      <Text>{des}</Text>
      <View>
        {dat.map((item, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={{ textAlign: "left" }}>{item.id}</Text>
            <Text style={{ textAlign: "left" }}>{item.title}</Text>
            <Text style={{ textAlign: "left" }}>{item.releaseYear}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default GetFun;
