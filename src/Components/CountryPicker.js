import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import styles from './CountryPicker.styles';

const countries = ['Korea', 'Indonesia', 'Japan', 'France', 'Australia'];

const CountryPicker = ({ setSelectedCountry }) => {
  return (
    <View style={styles.countryPickerContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {countries.map(country => (
          <TouchableOpacity
            key={country}
            onPress={() => setSelectedCountry(country)}
            style={styles.countryCard}
          >
            <Text style={styles.countryCardText}>{country}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CountryPicker;
