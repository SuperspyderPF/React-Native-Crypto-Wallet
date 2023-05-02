import React from 'react';
import { LineChart } from 'react-native-svg-charts';

const CoinChart = ({ data }) => {
  return (
    <LineChart
      style={{ height: 200 }}
      data={data}
      svg={{ stroke: 'rgba(0, 0, 255, 0.8)' }}
      contentInset={{ top: 20, bottom: 20 }}
    />
  );
};

export default CoinChart;
