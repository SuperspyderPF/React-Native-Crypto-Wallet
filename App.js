import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import axios from 'axios';

import SearchBar from './Components/SearchBar.js';
import CoinList from './Components/CoinList.js';
import CoinChart from './Components/CoinChart.js';
import TopCoins from './Components/TopCoins.js';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [coins, setCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);
  const [coinChartData, setCoinChartData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState('');

  useEffect(() => {
    fetchTopCoins();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCoins();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const fetchCoins = async () => {
    if (searchQuery === '') return;
    const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${searchQuery}`);
    setCoins(response.data.coins);
  };

  const fetchTopCoins = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    setTopCoins(response.data.coins);
  };

  const handleCoinPress = async (id, name) => {
    setSelectedCoin(name);
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1825`);
      setCoinChartData(response.data.prices.map((price) => price[1]));
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <SearchBar setSearchQuery={setSearchQuery} />
        <TopCoins topCoins={topCoins} handleCoinPress={handleCoinPress} />
        {selectedCoin !== '' && (
          <View>
            <Text>{selectedCoin} 5-year chart</Text>
            <CoinChart data={coinChartData} />
          </View>
        )}
        <CoinList coins={coins} handleCoinPress={handleCoinPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
