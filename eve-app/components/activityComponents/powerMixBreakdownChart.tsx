import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyles, { green, white } from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import ActivityScreenStyles from '../../styles/screens/activityStyles';
import { ApiResponse, fetchData } from '../../api/getLatestPowerBreakdownAPI';

const PowerConsumptionTable: React.FC<{ data: ApiResponse['powerConsumptionBreakdown'] }> = ({ data }) => {
  return (
    <View style={ActivityScreenStyles.table}>
      {Object.entries(data).map(([key, value]) => (
        <View key={key} style={ActivityScreenStyles.tableRow}>
          <Text style={ActivityScreenStyles.tableCell}>{key}</Text>
          <Text style={ActivityScreenStyles.tableCell}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const PowerMixBreakdownChart: React.FC = () => {

  const [data, setData] = useState<ApiResponse | null>(null);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

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
    <View style={[GlobalStyles.column, {borderWidth: 2, borderColor: green, borderRadius: 30}]}>
      {/* {data ? <PowerConsumptionTable data={data.powerConsumptionBreakdown} /> : <Text style={{color: white}}>Loading...</Text>}
      {data && ( */}
        <View style={[GlobalStyles.row, {alignItems: 'center', justifyContent: 'space-evenly'}]}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: green}}>{43}%</Text>
            <Text style={{color: white}}>Fossil Free</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{color: 'red'}}>{100 - 43}%</Text>
            <Text style={{color: white}}>Fossil Fueled</Text>
          </View>
          <TouchableOpacity onPress={toggleDetails}>
           {showDetails ? 
            <View style={{flexDirection: 'column', alignItems: 'center', paddingLeft: 110, paddingRight: 10}}>
              <Icon name="caret-up-outline" size={22} color= {white}/>
            </View>
          : 
            <View style={{flexDirection: 'column', alignItems: 'center', paddingLeft: 110, paddingRight: 10}}>
              <Icon name="caret-down-outline" size={22} color= {white}/>
            </View>
           }
          </TouchableOpacity>
        </View>
        {/* )} */}
        {showDetails ? (
          <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', alignSelf: 'flex-start', paddingLeft: 22, paddingBottom: 5}}>
            <Text style={{color: white, fontSize: 18, textDecorationLine: 'underline', paddingBottom: 6}}>Main Sources</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: 'red'}}>Gas</Text>
              <Text style={{color: white}}> ------------------------------------------ 57% </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: green}}>Nuclear</Text>
              <Text style={{color: white}}> --------------------------------------- 2% </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: green}}>Hydro</Text>
              <Text style={{color: white}}> ----------------------------------------- 0% </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: green}}>Solar</Text>
              <Text style={{color: white}}> ----------------------------------------- 16% </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: green}}>Wind</Text>
              <Text style={{color: white}}> ------------------------------------------ 9% </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: green}}>Geothermal</Text>
              <Text style={{color: white}}> ----------------------------------- 4% </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: green}}>Biomass</Text>
              <Text style={{color: white}}> --------------------------------------- 2% </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{color: green}}>Battery</Text>
              <Text style={{color: white}}> --------------------------------------- 10% </Text>
            </View>
            <Text style={{color: white, paddingTop: 10}}>Updated at Mon Dec 4 2023 1:16 PM EST</Text>
            
          </View>
        ) : null}
    </View>
  );
};

export default PowerMixBreakdownChart;