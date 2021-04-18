import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const savedCallback: any = useRef();

  function callback() {
    setCount(count + 1);
  }

  useEffect(() => {
    savedCallback.current = callback;
  });

  const startCount = () => {
    if (!start) {
      function tick() {
        savedCallback.current();
      }

      let id = setInterval(tick, 10);
      return () => clearInterval(id);
    }
  };

  const [start, setStart] = useState(false);
  const [lapArr, setLapArr] = useState([] as any);
  const increment: any = useRef(null);

  let padToTwo = (number: number) => {
    if (number < 100) {
      return `00 : ${number}`;
    } else {
      const sec = Math.floor(number / 100);
      const msec = number % 100;
      return `${sec} : ${msec}`;
    }
    // number <= 9 ? `0${number}` : number;
  };

  const handleToggle = () => {
    setStart(!start);
    handleStart();
    startCount();
  };

  const handleLap = (number: number) => {
    setLapArr([...lapArr, number]);
  };

  const handleStart = () => {
    if (!start) {
      increment.current = setInterval(() => {
        setTime((t: number) => ++t);
      }, 10);
    } else {
      clearInterval(increment.current);
    }
  };

  const handleReset = () => {
    setTime(0);
    clearInterval(increment.current);
    setLapArr([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.child}>{padToTwo(time)}</Text>
        <Text>{count}</Text>
      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToggle}>
          <Text style={styles.buttonText}>{start ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleLap(time)}
          disabled={!start}>
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
      </View>
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
});
export default StopWatch;
