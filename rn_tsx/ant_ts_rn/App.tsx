import React from 'react';
import {View} from 'react-native';
import {Tabs} from '@ant-design/react-native';

const App: React.FC = () => {
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <Tabs />
    </View>
  );
};

// const styles = StyleSheet.create({
//   TapView: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 150,
//     backgroundColor: '#fff',
//   },
// });
export default App;
