import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  featuredBrandsContainer: {
    flexDirection: 'row',
    marginVertical: height * 0.02,
  },
  featuredBrandItem: {
    marginRight: width * 0.02,
    padding: width * 0.04,
    borderWidth: 1,
    borderColor: '#ddd',
    width:'30px',
    alignItems: 'center',
  },
  featuredBrandText: {
    fontSize: width * 0.04,
    marginTop: height * 0.01,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
  },
  tabText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  activeTabText: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: width * 0.04,
    marginBottom: height * 0.02,
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: height * 0.02,
  },
  alphabetLetter: {
    width: width * 0.1,
    textAlign: 'center',
    fontSize: width * 0.04,
    color: '#555',
  },
  brandItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  brandText: {
    fontSize: width * 0.04,
    marginLeft: width * 0.04,
  },
  brandLogo: {
    width: width * 0.1,
    height: width * 0.1,
    objectFit:'contain'
  },
});

export default styles;