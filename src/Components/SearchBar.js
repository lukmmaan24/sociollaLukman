import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../styles';

const SearchBar = ({ searchText, setSearchText }) => {
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search brand..."
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default SearchBar;