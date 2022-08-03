import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

interface SearchBoxProps {
    fetchWeatherData: (message: string) => void;

}

const SearchBar: React.FC<SearchBoxProps> =({ fetchWeatherData }) =>{

    const [countryName, setCountyName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput 
                placeholder='Enter Country name'
                value={countryName}
                onChangeText={(text) => setCountyName(text)}
            />
            <EvilIcons name="search" size={28} color="black"  onPress={() => fetchWeatherData(countryName)}/>
        </View>
    )
}
export { SearchBar };
const styles = StyleSheet.create({
    searchBar: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray'
    }
})