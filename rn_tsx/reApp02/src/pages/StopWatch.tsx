import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';

const StopWatch = () => {
  const [start, setStart] = useState(false as any);
  const [timer, setTimer] = useState('00:00:00.000' as any);
  const [lapArr, setLapArr] = useState([] as any);
  const started: any = useRef(null);

  const startTimer = () => {
    const startedTime: any = new Date();
    setStart(!start);
    if (!start) {
      started.current = setInterval(() => {
        let currentTime: any = new Date(),
          timeElapsed = new Date(currentTime - startedTime),
          hour = timeElapsed.getUTCHours(),
          min = timeElapsed.getUTCMinutes(),
          sec = timeElapsed.getUTCSeconds(),
          ms = timeElapsed.getUTCMilliseconds();

        if (timer !== '00:00:00.000') {
          hour += +timer.split(':')[0];
          min += +timer.split(':')[1];
          sec += +timer.split(':')[2].split('.')[0];
          ms += +timer.split(':')[2].split('.')[1];
          if (ms >= 1000) {
            sec++;
            ms = timeElapsed.getUTCMilliseconds();
          }
        }

        const time =
          (hour > 9 ? hour : '0' + hour) +
          ':' +
          (min > 9 ? min : '0' + min) +
          ':' +
          (sec > 9 ? sec : '0' + sec) +
          '.' +
          (ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms);
        setTimer(time);
      }, 10);
    } else {
      clearInterval(started.current);
    }
  };

  function reset() {
    clearInterval(started.current);
    setStart(false);
    setTimer('00:00:00.000');
    setLapArr([]);
  }

  function makeLap() {
    const copy = [...lapArr];
    copy.push(timer);
    setLapArr(copy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.child}>{timer}</Text>
      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>{start ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={makeLap}
          disabled={!start}>
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        <FlatList
          data={lapArr}
          renderItem={({item, index}) => (
            <Text key={index + 1} style={styles.item}>
              {`#${index}            `}
              {item}
            </Text>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#DBD053',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '8%',
  },
  parent: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 80,
    borderColor: '#694966',
    backgroundColor: '#694966',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingTop: '.5%',
    paddingBottom: '.5%',
  },

  child: {
    fontSize: 40,
    color: '#C89933',
  },

  buttonParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '12%',
  },

  button: {
    backgroundColor: '#694966',
    paddingTop: '5%',
    paddingBottom: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    display: 'flex',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#694966',
    height: 60,
  },

  buttonText: {
    color: '#C89933',
    fontSize: 20,
    alignSelf: 'center',
  },
  scroll: {
    maxHeight: '63%',
    backgroundColor: '#C89933',
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 44,
    color: '#5C415D',
    textAlign: 'center',
    backgroundColor: '#fff',
    marginBottom: 1,
  },
});
export default StopWatch;
