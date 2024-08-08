import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import styles from '../../styles';

const BrandList = ({ brands }) => {
  return (
    <FlatList
      data={brands}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={styles.brandItem}>
          <Image source={{ uri: item.logo }} style={styles.brandLogo} />
          <Text style={styles.brandText}>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default BrandList;