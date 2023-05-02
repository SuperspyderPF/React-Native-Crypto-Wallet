import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CoinList = ({ coins, handleCoinPress }) => {
  return (
    <View>
      {coins.map((coin) => (
        <TouchableOpacity
          key={coin.id}
          onPress={() => handleCoinPress(coin.id, coin.name)}
        >
          <View style={styles.coinItem}>
            <Image
              source={{ uri: coin.image }}
              style={styles.coinImage}
            />
            <Text style={styles.coinName}>{coin.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  coinItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  coinImage: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  coinName: {
    fontSize: 18,
  },
});

export default CoinList;
