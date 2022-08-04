import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Weather } from "./Components/CountryDetails";
import { SearchBar } from "./Components/CountrySearchBar";
import { CountySearchDetails } from "./Components/CountrySearcDetails";
import  backImg  from "./assets/peakpx.jpg";

const API_KEY = "b88c137fa5a4496e19131fe4cd6db1a1";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);
  const [looding, setLooding] = useState(true);
  const [countryData, setCountryData] = useState(null);
  const [display, setDisplay] = useState("none");
  const fetchWeatherData = async (capital: string) => {
    setLooding(true);

    setDisplay("block");
    const API = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } else {
        setWeatherData(null);
      }

      setLooding(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCountryData = async (countryname: string) => {
    setLooding(true);
    setLoaded(false);
    const Api = `https://restcountries.com/v3.1/name/${countryname}`;
    try {
      const response = await fetch(Api);
      if (response.status == 200) {
        const data = await response.json();
        setCountryData(data[1]);
        console.log(data[1]);
        console.log(data[1], "capitallll");
      } else {
        setCountryData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
    setDisplay("none");
  };
  useEffect(() => {
    fetchCountryData("India");
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="gray" size={36} />
      </View>
    );
  } else if (countryData === null) {
    return (
      <View style={styles.container}>
        <SearchBar fetchWeatherData={fetchCountryData} />
        <Text style={styles.primaryText}>
          City Not Found! Try Different City
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backImg}
        style={styles.backgroundImg}
        resizeMode="cover"
      >
        <CountySearchDetails
          countryData={countryData}
          fetchCountryData={fetchCountryData}
          fetchWeatherData={fetchWeatherData}
        />

        <View>
          {looding ? (
            // <ActivityIndicator color="gray" size={36} />
            <View></View>
          ) : (
            <Weather weatherData={weatherData} />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    margin: 20,
    fontSize: 28,
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
  weatherNone:{
    display:"none",
  },
  
});
