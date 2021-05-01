import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
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
    paddingTop: '30%',
  },
});
export default StopWatch;
