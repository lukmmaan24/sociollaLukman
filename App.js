import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';
import FeaturedBrands from './src/Components/FeaturedBrands';
import AlphabetList from './src/Components/AlphabetList';
import BrandList from './src/Components/BrandList';
import SearchBar from './src/Components/SearchBar';
import CountryPicker from './src/Components/CountryPicker';
import styles from './styles';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [featuredBrands, setFeaturedBrands] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedTab, setSelectedTab] = useState('BRAND NAME');
  const [selectedLetter, setSelectedLetter] = useState('A');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeaturedBrands();
  }, []);

  useEffect(() => {
    if (searchText) setSelectedLetter('');
    else setSelectedLetter('A');
  }, [searchText]);

  useEffect(() => {
    fetchBrands();
  }, [selectedLetter, searchText, selectedTab, selectedCountry]);

  const fetchFeaturedBrands = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://catalog-api3.sociolla.com/v3/brands?filter={"is_featured":true}&fields=_id+name+slug+logo+featured_text&skip=0&limit=15&sort=-featured_created_at');
      setFeaturedBrands(response.data.data);
    } catch (error) {
      console.error('Error fetching featured brands:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBrands = async () => {
    setLoading(true);
    try {
      let url = 'https://catalog-api3.sociolla.com/v3/brands?fields=_id+name+slug+country+logo+featured_text&skip=0&limit=100&sort=name&';

      if (selectedTab === 'BRAND NAME') {
        if (searchText) {
          url += `filter={"name":{"$regex":"${searchText}","$options":"i"}}`;
          setSelectedLetter('');
        } else {
          url += `filter={"name":{"$regex":"^${selectedLetter}"}}`;
        }
      } else if (selectedTab === 'BRAND ORIGINS') {
        url += `filter={"country":"${selectedCountry.toLowerCase()}"}`;
      }
      const response = await axios.get(url);
      setBrands(response.data.data || []);
    } catch (error) {
      console.error('Error fetching brands:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setSelectedLetter('A');
    setSearchText('');
    setSelectedCountry('');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <FeaturedBrands brands={featuredBrands} />
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <>
              <View style={styles.tabContainer}>
                <TouchableOpacity onPress={() => handleTabChange('BRAND NAME')}>
                  <Text style={[styles.tabText, selectedTab === 'BRAND NAME' && styles.activeTabText]}>BRAND NAME</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabChange('BRAND ORIGINS')}>
                  <Text style={[styles.tabText, selectedTab === 'BRAND ORIGINS' && styles.activeTabText]}>BRAND ORIGINS</Text>
                </TouchableOpacity>
              </View>
              {selectedTab === 'BRAND NAME' ? (
                <SearchBar searchText={searchText} setSearchText={setSearchText} />
              ) : (
                <CountryPicker setSelectedCountry={setSelectedCountry} />
              )}
              {selectedTab === 'BRAND NAME' && !searchText && <AlphabetList setSelectedLetter={setSelectedLetter} />}
              <BrandList brands={brands} />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
