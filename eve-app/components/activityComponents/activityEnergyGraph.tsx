import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { black, white } from '../../styles/globalStyles';

const ActivityEnergyGraph = () => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [20, 45, 28, 80, 100, 43, 30, 60, 20, 30 , 70, 80],
        },
      ],
    };
  
    return (
      <View style={{paddingRight: 30}}>
        <LineChart
          data={data}
          width={350}
          height={100}
          // yAxisSuffix="k"
          // yAxisLabel={yLabels}
          chartConfig={{
            backgroundColor: white,
            backgroundGradientFrom: black,
            backgroundGradientTo: black,
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(215, 215, 215, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(215, 215, 215, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0',
              // strokeWidth: '2',
              // stroke: white,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            // borderRadius: 16,
            // paddingRight: 50,
          }}
        />
      </View>
    );
  };
  
  export default ActivityEnergyGraph;
  