import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "./CountrySearchBar";

interface CountrySearchDetailsProps {
  countryData: {
    capital: [string];
    population: Number;
    latlng: [Number, Number];
    flags: {
      png: string;
    };
  };
  fetchCountryData: (message: string) => void;
  fetchWeatherData: (message: string) => void;
}

const CountySearchDetails: React.FC<CountrySearchDetailsProps> = ({
  countryData,
  fetchCountryData,
  fetchWeatherData,
}) => {
  const {
    capital,
    population,
    latlng,
    flags: { png },
  } = countryData;
  const [cap] = capital;
  const [lat, lng] = latlng;

  console.log(cap, "apital");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="darkgray" />

      <SearchBar fetchWeatherData={fetchCountryData} />

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: `${png}`,
            }}
          />
        </View>
        <Text
          style={{
            ...styles.headerText,
            color: "white",
            fontWeight: "bold",
            fontSize: 46,
          }}
        >
          {cap}
        </Text>
      </View>

      <View style={styles.extraInfo}>
        <View style={styles.info}>
          <Text style={{ fontSize: 22, color: "white" }}>Population</Text>
          <Text style={{ fontSize: 22, color: "white" }}>{population}</Text>
        </View>

        <View style={styles.info}>
          <Text style={{ fontSize: 22, color: "white" }}>
            latitude : {lat}{" "}
          </Text>
          <Text style={{ fontSize: 22, color: "white" }}>Longitude : {lng}</Text>
        </View>
      </View>

      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => fetchWeatherData(cap)}
        >
          <Text style={{ color: "white" }}>Get Capital Weather</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export { CountySearchDetails };
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
    // backgroundColor: "red"
  },
  headerText: {
    fontSize: 36,
    marginTop: 10,
  },
  extraInfo: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    padding: 10,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "rgba(0,0,0, 0.5)",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    margin: 20,
  },
  tinyLogo: {
    width: 150,
    height: 100,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.5)",
    padding: 10,
    width: Dimensions.get("screen").width / 2.5,
  },
});
