import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Sound from 'react-native-sound';

const Timer = () => {
  const sound2 = new Sound(require('@sound/ring.wav'), error => {
    if (error) {
      Alert.alert('error' + error.message);
    }
    sound2.setNumberOfLoops(-1);
    sound2.setVolume(1);
  });
  const [start, setStart] = useState(false);
  const [pauseAndContinue, setPauseAndContinue] = useState(false);
  const [selectTime, setSelectTime] = useState(0);
  const [extraTime, setExtraTime] = useState('00 : 00 : 00 : 000');
  const [time, setTime] = useState({
    hour: [] as Element,
    min: [] as Element,
    sec: [] as Element,
  });

  const started = useRef<number | NodeJS.Timeout | null>(null);
  const startedForTimer = useRef<number | NodeJS.Timeout | null>(null);

  const parseClock = (h: number, m: number, s: number, ms: number) => {
    return `${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${
      s > 9 ? s : '0' + s
    } . ${ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms}`;
  };
  const parseMilli = (s: string) => {
    const spl = s.split(':');
    const spl_ = spl[2].split('.');
    return (+spl[0] * 3600 + +spl[1] * 60 + +spl_[0]) * 1000 + +spl_[1];
  };

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
    const startedTime: number = +new Date();
    setStart(!start);
    if (!start) {
      startedForTimer.current = setTimeout(() => {
        setSelectTime(0);
        sound2.play(() => {
          sound2.release();
        });
      }, selectTime * 1000);

      started.current = setInterval(() => {
        const currentTime: number = +new Date(),
          timeElapsed = new Date(startedTime - currentTime + selectTime * 1000);
        let hour = timeElapsed.getUTCHours(),
          min = timeElapsed.getUTCMinutes(),
          sec = timeElapsed.getUTCSeconds(),
          ms = timeElapsed.getUTCMilliseconds();

        const time = parseClock(hour, min, sec, ms);
        setExtraTime(time);
      }, 10);
    } else {
      if (
        typeof started.current === 'number' &&
        typeof startedForTimer.current === 'number'
      ) {
        clearInterval(started.current);
        clearTimeout(startedForTimer.current);
      }
    }
  };

  const onChangeTime = (value: number, kind: string) => {
    let initVal;
    if (kind === 'sec' && value !== 0) {
      initVal = (selectTime % 3600) % 60;
    } else if (kind === 'min' && value !== 0) {
      initVal = Math.floor((selectTime % 3600) / 60) * 60;
    } else if (kind === 'hour' && value !== 0) {
      initVal = Math.floor(selectTime / 3600) * 3600;
    } else {
      if (kind === 'sec') {
        initVal = (selectTime % 3600) % 60;
      } else if (kind === 'min') {
        initVal = Math.floor((selectTime % 3600) / 60) * 60;
      } else {
        initVal = Math.floor(selectTime / 3600) * 3600;
      }
    }
    const nextTime = selectTime + value - initVal;
    setSelectTime(nextTime);

    const hour = Math.floor(nextTime / 3600),
      min = Math.floor((nextTime % 3600) / 60),
      sec = (nextTime % 3600) % 60,
      ms = 0;

    const time = parseClock(hour, min, sec, ms);
    setExtraTime(time);
  };

  const Pause = () => {
    setPauseAndContinue(!pauseAndContinue);
    if (!pauseAndContinue) {
      if (
        typeof started.current === 'number' &&
        typeof startedForTimer.current === 'number'
      ) {
        clearInterval(started.current);
        clearTimeout(startedForTimer.current);
      }
    } else {
      const extra = parseMilli(extraTime);
      console.log(extra);
      const startedTime: number = +new Date();

      startedForTimer.current = setTimeout(() => {
        setSelectTime(0);
        sound2.play(() => {
          sound2.release();
        });
      }, selectTime * 1000);

      started.current = setInterval(() => {
        const currentTime: number = +new Date(),
          timeElapsed = new Date(startedTime - currentTime + extra);
        let hour = timeElapsed.getUTCHours(),
          min = timeElapsed.getUTCMinutes(),
          sec = timeElapsed.getUTCSeconds(),
          ms = timeElapsed.getUTCMilliseconds();

        const time = parseClock(hour, min, sec, ms);
        setExtraTime(time);
      }, 10);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.clockSection}>
          {start ? (
            <View style={styles.parent}>
              <Text style={styles.child}>{extraTime}</Text>
            </View>
          ) : (
            <>
              <Picker
                itemStyle={{fontSize: 35}}
                style={{height: 80, width: 120}}
                selectedValue={Math.floor(selectTime / 3600)}
                onValueChange={(val: number) => {
                  onChangeTime(val * 3600, 'hour');
                }}>
                {time.hour}
              </Picker>
              <Picker
                itemStyle={{fontSize: 35}}
                style={{height: 80, width: 120}}
                selectedValue={Math.floor((selectTime % 3600) / 60)}
                onValueChange={(val: number) => {
                  onChangeTime(val * 60, 'min');
                }}>
                {time.min}
              </Picker>
              <Picker
                itemStyle={{fontSize: 35}}
                style={{height: 80, width: 120}}
                selectedValue={(selectTime % 3600) % 60}
                onValueChange={(val: number) => {
                  onChangeTime(val, 'sec');
                }}>
                {time.sec}
              </Picker>
            </>
          )}
        </View>

        <View style={styles.buttonSection}>
          {start ? (
            <TouchableOpacity
              style={styles.buttonSectionButton}
              onPress={() => {
                Pause();
              }}>
              <Text style={styles.buttonSectionText}>
                {pauseAndContinue ? 'continue' : 'Pause'}
              </Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={styles.buttonSectionButton}
            onPress={() => {
              startTimer();
            }}>
            <Text style={styles.buttonSectionText}>
              {start ? 'Cancel' : 'Start'}
            </Text>
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
  parent: {
    flexDirection: 'row',
  },
  child: {
    fontSize: 42,
  },
});

export default Timer;
