import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Sound from 'react-native-sound';

const Timer = () => {
  const sound2 = new Sound(require('@sound/ring.wav'), (error: any) => {
    if (error) {
      Alert.alert('error' + error.message);
    }
    sound2.setNumberOfLoops(-1);
    sound2.setVolume(1);
  });
  const [currentTime, setCurrentTime] = useState(0);

  const [time, setTime] = useState({
    hour: [] as Element,
    min: [] as Element,
    sec: [] as Element,
  });

  const started: any = useRef(null);

  useEffect(() => {
    const h: number[] = [],
      m: number[] = [];
    for (let i = 0; i <= 24; i++) {
      h.push(i);
    }
    for (let i = 0; i < 60; i++) {
      m.push(i);
    }
    const linkTime = {
      hour: h.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
      min: m.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
      sec: m.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
    };
    setTime(linkTime);
  }, []);

  const startTimer = () => {
    setTimeout(() => {
      clearInterval(started.current);
      setCurrentTime(0);
      sound2.play(() => {
        sound2.release();
      });
    }, currentTime * 1000);
    started.current = setInterval(() => {
      setCurrentTime(v => --v);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(started.current);
  };

  const onChangeTime = (value: number) => {
    setCurrentTime(currentTime + value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.clockSection}>
          <Picker
            itemStyle={{fontSize: 35}}
            style={{height: 80, width: 120}}
            selectedValue={Math.floor(currentTime / 3600)}
            onValueChange={(val: number) => {
              onChangeTime(val * 3600);
            }}>
            {time.hour}
          </Picker>
          <Picker
            itemStyle={{fontSize: 35}}
            style={{height: 80, width: 120}}
            selectedValue={Math.floor((currentTime % 3600) / 60)}
            onValueChange={(val: number) => {
              onChangeTime(val * 60);
            }}>
            {time.min}
          </Picker>
          <Picker
            itemStyle={{fontSize: 35}}
            style={{height: 80, width: 120}}
            selectedValue={(currentTime % 3600) % 60}
            onValueChange={(val: number) => {
              onChangeTime(val);
            }}>
            {time.sec}
          </Picker>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.buttonSectionButton}
            onPress={() => {
              stopTimer();
            }}>
            <Text style={styles.buttonSectionText}>Stop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSectionButton}
            onPress={() => {
              startTimer();
            }}>
            <Text style={styles.buttonSectionText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  soundContainer: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lightgrey',
    opacity: 0.3,
    flexDirection: 'row',
  },
  container: {
    paddingTop: 10,
    flex: 1,
  },
  article: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  clockSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSectionButton: {
    marginLeft: 5,
    marginRight: 5,
  },
  buttonSectionText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    padding: 22,
  },
});

export default Timer;
