import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [back, setBack] = useState([] as any);

  useEffect(() => {
    //원하는것, infinity piker
    const backHour = [];
    for (let i = 0; i <= 24; i++) {
      backHour.push(i);
    }
    for (let i = 0; i <= 24; i++) {
      backHour.push(i);
    }

    setBack(
      backHour.map((item: number) => (
        <Picker.Item label={item + ''} value={item} />
      )),
    );
  }, [hour]);

  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.clockSection}>
          <Picker
            style={{height: 50, width: 250}}
            selectedValue={hour}
            onValueChange={(val: number) => setHour(val)}>
            {back}
          </Picker>
        </View>
        <View style={styles.buttonSection}>
          {/*<TouchableOpacity*/}
          {/*  style={styles.buttonSectionButton}*/}
          {/*  onPress={() => {}}>*/}
          {/*  <Text style={styles.buttonSectionText}>Stop</Text>*/}
          {/*</TouchableOpacity>*/}
          <TouchableOpacity
            style={styles.buttonSectionButton}
            onPress={() => {}}>
            <Text style={styles.buttonSectionText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4d4d',
    paddingTop: 10,
    flex: 1,
  },
  article: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  clockSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSectionButton: {
    backgroundColor: 'black',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
  },
  buttonSectionText: {
    alignSelf: 'center',
    color: 'teal',
    fontSize: 24,
    fontWeight: '600',
    padding: 22,
  },
});

export default Timer;
