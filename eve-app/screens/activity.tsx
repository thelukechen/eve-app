import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const ActivityScreen = () => {
  // Sample data for the line chart
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // purple color
        strokeWidth: 2, // optional
      },
      {
        data: [50, 20, 33, 78, 35, 40],
        color: (opacity = 1) => `rgba(33, 150, 243, ${opacity})`, // blue color
        strokeWidth: 2, // optional
      },
    ],
  };

  // Sample data for the bar chart
  const barChartData = {
    labels: ['Fossil Fuel', 'Fossil Free'],
    datasets: [
      {
        data: [70, 30],
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Activity</Text>

      {/* Line Chart */}
      <Text style={styles.chartTitle}>Power Usage vs Fossil Fuel Saved</Text>
      <LineChart
        data={lineChartData}
        width={400}
        height={200}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />

      {/* Bar Chart */}
      <Text style={styles.chartTitle}>Power Mix Report</Text>
      <BarChart
        data={barChartData}
        width={400}
        height={200}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />

      {/* Electric Power Breakdown */}
      <Text style={styles.breakdownTitle}>Electric Power Breakdown</Text>
      <View style={styles.breakdownContainer}>
        <Text style={styles.white}>Gas: 30%</Text>
        <Text style={styles.white}>Nuclear: 15%</Text>
        <Text style={styles.white}>Hydro: 10%</Text>
        <Text style={styles.white}>Solar: 20%</Text>
        <Text style={styles.white}>Wind: 15%</Text>
        <Text style={styles.white}>Geothermal: 5%</Text>
        <Text style={styles.white}>Biomass: 3%</Text>
        <Text style={styles.white}>Battery: 2%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#212121',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  breakdownTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  breakdownContainer: {
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
  },
  white: {
    color:  'white',
  }
});

export default ActivityScreen;
