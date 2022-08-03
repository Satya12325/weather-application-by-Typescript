import {
    Image,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    StatusBar,
  } from "react-native";

  interface weatherDataProps{
    weatherData: {
        location: {
            name:string,
            country:string,
            lat:number,
            lon:number
        },
        current: {
            temperature:string,
            wind_speed:Number,
            precip:Number,
            weather_icons:[string],
        }

    }
  }
  
  const Weather: React.FC<weatherDataProps> = ({ weatherData }) => {
    const {
      location: { name, country, lat, lon },
      current: { temperature, wind_speed, precip, weather_icons },
    } = weatherData;
    const [main] = weather_icons;
    console.log(weatherData, "weatherdata");
  
    console.log(main, "weather", name, country, lat, lon);
  
    return (
      <View style={styles.container}>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-weather-news-digital-nomading-relocation-flaticons-flat-flat-icons.png`,
                  }}
                />
  
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `${main}`,
                  }}
                />
              </View>
              <Text
                style={{
                  ...styles.headerText,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  ...styles.headerText,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 22,
                }}
              >
                {country}
              </Text>
              <Text style={{ color: "white", fontSize: 22 }}>
                {temperature} °C
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 22, color: "white" }}>Precipitation</Text>
              <Text style={{ fontSize: 22, color: "white" }}>{precip} %</Text>
              <Text style={{ fontSize: 22, color: "white" }}>Wind Speed</Text>
              <Text style={{ fontSize: 22, color: "white" }}>
                {wind_speed} km/h
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  export {Weather}
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
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
      width: Dimensions.get("screen").width / 1.5,
      backgroundColor: "rgba(0,0,0, 0.5)",
      padding: 10,
      borderRadius: 15,      
      flexDirection: "row",
      marginTop: 20,
      justifyContent: "space-evenly",
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });
  