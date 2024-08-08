import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../../styles';

const AlphabetList = ({ setSelectedLetter }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <View style={styles.alphabetContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {letters.map(letter => (
          <TouchableOpacity key={letter} onPress={() => setSelectedLetter(letter)}>
            <Text style={styles.alphabetLetter}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AlphabetList;
