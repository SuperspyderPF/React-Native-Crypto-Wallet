import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TopCoins = ({ topCoins, handleCoinPress }) => {
  return (
    <View style={styles.topCoinsContainer}>
      {topCoins.map((coin) => (
        <TouchableOpacity
          key={coin.id}
          onPress={() => handleCoinPress(coin.id, coin.name)}
        >
          <View style={styles.topCoinItem}>
            <Image
              source={{ uri: coin.image }}
              style={styles.topCoinImage}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  topCoinsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  topCoinItem: {
    alignItems: 'center',
  },
  topCoinImage: {
    width: 32,
    height: 32,
  },
});

export default TopCoins;
