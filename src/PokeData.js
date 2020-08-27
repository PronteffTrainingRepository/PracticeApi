import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function PokeData({ route }) {
  const { data } = route.params;
  const [dat, SetData] = useState([]);
  const [weig, setWeight] = useState();
  const [move, setMoves] = useState([]);
  const [heig, setHeight] = useState();
  const [name, setName] = useState("");
  async function getData() {
    let res = await Axios.get(data);
    SetData(res.data.sprites);
    setWeight(res.data.weight);
    setMoves(res.data.moves);
    setHeight(res.data.height);
    setName(res.data.name);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {/* <Text>Heelo World....</Text>
      <Text>{data}</Text>
      <Text>{dat.back_default}</Text> */}
      {/* card Starts */}
      <TouchableOpacity>
        <View style={styles.card}>
          <View>
            <Image
              style={{
                width: wd * 0.7,
                height: ht * 0.43,
                alignSelf: "center",
              }}
              source={{ uri: dat.front_shiny }}
              //elevation="10"
            />
          </View>
          <View style={{ flexDirection: "row", marginBottom: ht * 0.03 }}>
            <View
              style={{
                flex: 2,
                alignContent: "flex-start",
                paddingLeft: wd * 0.05,
              }}
            >
              <Text style={styles.text}>Name :</Text>
              <Text style={styles.text}>Number Of Moves : </Text>
              <Text style={styles.text}>Height : </Text>
              <Text style={styles.text}>Weight : </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>{name.toUpperCase()}</Text>
              <Text style={styles.text}>{move.length}</Text>
              <Text style={styles.text}>{heig} Feet</Text>
              <Text style={styles.text}>{weig} Kg</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* card Ends */}
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignContent: "center",
    backgroundColor: "lightgray",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  card: {
    elevation: 5,
    backgroundColor: "purple",
    borderRadius: ht*0.03,
    width: wd*0.91,
    marginLeft: wd*0.04,
    marginTop: ht*0.04,
  },
});
export default PokeData;
