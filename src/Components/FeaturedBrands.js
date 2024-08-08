import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../../styles';

const FeaturedBrands = ({ brands }) => {
  return (
    <View>
      <Text style={styles.header}>FEATURED BRANDS</Text>
      <ScrollView horizontal style={styles.featuredBrandsContainer}>
        {brands.map(brand => (
          <TouchableOpacity key={brand._id} style={styles.featuredBrandItem}>
            <Image source={{ uri: brand.logo }} style={styles.brandLogo} />
            <Text style={styles.featuredBrandText}>{brand.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedBrands;