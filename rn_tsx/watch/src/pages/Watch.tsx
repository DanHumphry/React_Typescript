import React, {useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Clock from '@components/Watch/Clock';
import LapTable from '@components/Watch/LapTable';

const StopWatch = () => {
  const [tableData, setTableData] = useState([]);

  return (
    <View style={styles.container}>
      <Clock tableData={tableData} setTableData={setTableData} />
      <LapTable tableData={tableData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    ...Platform.select({
      ios: {paddingTop: '30%'},
      android: {paddingTop: '15%'},
    }),
  },
});
export default StopWatch;
