import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import { fetchData, ApiResponse } from '../api/getLatestPowerBreakdownAPI';


const PowerConsumptionTable: React.FC<{ data: ApiResponse['powerConsumptionBreakdown'] }> = ({ data }) => {
  return (
    <View style={styles.table}>
      {Object.entries(data).map(([key, value]) => (
        <View key={key} style={styles.tableRow}>
          <Text style={styles.tableCell}>{key}</Text>
          <Text style={styles.tableCell}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const SummaryComponent: React.FC = () => {

  const [data, setData] = useState<ApiResponse | null>(null);

const refreshData = () => {
  fetchData().then(fetchedData => {
    if (fetchedData) {
      setData(fetchedData);
    }
  });
};
  

  useEffect(() => {
    fetchData().then(fetchedData => {
      if (fetchedData) {
        setData(fetchedData);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Power Consumption Data</Text>
        {data ? <PowerConsumptionTable data={data.powerConsumptionBreakdown} /> : <Text>Loading...</Text>}
        <View style={styles.buttonContainer}>
          <Button title="Refresh Data" onPress={refreshData} />
        </View>
      </ScrollView>
      {data && (
        <View style={styles.updatedAtContainer}>
          <Text>Last Updated: {data.updatedAt}</Text>
          <Text>Fossil Free Percentage: {data.fossilFreePercentage}</Text>
          <Text>Renewable Percentage: {data.renewablePercentage}</Text>
          <Text>Power Consumption Total: {data.powerConsumptionTotal}</Text>
          <Text>Zone: {data.zone}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  scrollView: {
    flex: 1,
  },
  updatedAtContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  table: {
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    flex: 1,
  },
  buttonContainer: {
    marginVertical: 20,
    // Add any additional styling you want for the button container
  },
});


// const SummaryComponent = () => {
//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   return (
//     <ScrollView contentContainerStyle={GlobalStyles.container} 
//     style={GlobalStyles.scrollView} indicatorStyle='white' 
//     showsVerticalScrollIndicator={true}>
//     <View>
//       <Text>Summary Information</Text>

//       {showDetails ? (
//         <View>
//           {/* Detailed Information */}
//           <Text>Detailed Information 1</Text>
//           <Text>Detailed Information 2</Text>
//           <Text>Detailed Information 3</Text>
//         </View>
//       ) : null}

//       <TouchableOpacity onPress={toggleDetails}>
//         <Text>{showDetails ? 'Hide Details' : 'Show Details'}</Text>
//       </TouchableOpacity>
//     </View>
//     </ScrollView>
//   );
// };

export default SummaryComponent;
