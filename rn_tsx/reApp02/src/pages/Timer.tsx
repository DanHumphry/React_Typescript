import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const increment: any = useRef(null);
  const increment2: any = useRef(null);

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
  };

  const handleStart = () => {
    if (start) {
      increment.current = setInterval(() => {
        setTime((t: number) => ++t);
      }, 10);

      increment2.current = setInterval(() => {
        setCount((t: number) => ++t);
      }, 1000);
    } else {
      clearInterval(increment.current);
      clearInterval(increment2.current);
    }
  };

  const handleReset = () => {
    setTime(0);
    setCount(0);
    clearInterval(increment.current);
  };

  return (
    <View>
      <View>
        <Text>{padToTwo(time)}</Text>
        <Text>{count}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleReset}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToggle}>
          <Text>{start ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Timer;
