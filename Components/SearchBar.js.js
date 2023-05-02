import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <TextInput
      style={styles.searchBar}
      onChangeText={handleSearch}
      placeholder="Search crypto coins..."
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
  },
});

export default SearchBar;
