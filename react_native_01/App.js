import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView}>
        <Text style={styles.mainText}>ㅅㄷd</Text>
      </View>
      <View style={styles.subView}>
        <Text>ㅅㄷd</Text>
      </View>
      <View style={styles.anotherSubView}>
        <Text>ㅅㄷd</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'green',
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'blue',
    width: '100%',
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 20,
  },
});

export default App;
