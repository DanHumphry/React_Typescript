import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import useSound from 'react-native-use-sound';

const Timer = () => {
  const coolMusic =
    'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3';
  const [play, pause, stop, data] = useSound(coolMusic);
  const handlePlay = () => {
    if (data.isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const [selectHour, setSelectHour] = useState(0);
  const [selectMin, setSelectMin] = useState(0);
  const [selectSec, setSelectSec] = useState(0);
  const [hour, setHour] = useState([] as Element);
  const [min, setMin] = useState([] as Element);
  const [sec, setSec] = useState([] as Element);

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
    setHour(
      h.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
    );
    setMin(
      m.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
    );
    setSec(
      m.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
    );
  }, []);

  const startTimer = () => {
    started.current = setInterval(() => {
      if (selectSec === 0) {
        if (selectMin === 0) {
          if (selectHour === 0) {
            Alert.alert('끝');
            clearInterval(started.current);
          } else {
            setSelectHour(v => v - 1);
            setSelectMin(59);
          }
        } else {
          setSelectMin(v => v - 1);
          setSelectSec(59);
        }
      } else {
        setSelectSec(v => v - 1);
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(started.current);
  };

  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.clockSection}>
          {/*<Picker*/}
          {/*  itemStyle={{fontSize: 35}}*/}
          {/*  style={{height: 80, width: 120}}*/}
          {/*  selectedValue={selectHour}*/}
          {/*  onValueChange={(val: number) => {*/}
          {/*    setSelectHour(val);*/}
          {/*  }}>*/}
          {/*  {hour}*/}
          {/*</Picker>*/}
          {/*<Picker*/}
          {/*  itemStyle={{fontSize: 35}}*/}
          {/*  style={{height: 80, width: 120}}*/}
          {/*  selectedValue={selectMin}*/}
          {/*  onValueChange={(val: number) => {*/}
          {/*    setSelectMin(val);*/}
          {/*  }}>*/}
          {/*  {min}*/}
          {/*</Picker>*/}
          {/*<Picker*/}
          {/*  itemStyle={{fontSize: 35}}*/}
          {/*  style={{height: 80, width: 120}}*/}
          {/*  selectedValue={selectSec}*/}
          {/*  onValueChange={(val: number) => {*/}
          {/*    setSelectSec(val);*/}
          {/*  }}>*/}
          {/*  {sec}*/}
          {/*</Picker>*/}
        </View>
        <View>
          <Button
            title={data.isPlaying ? 'Pause' : 'Play'}
            onPress={handlePlay}
          />
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
