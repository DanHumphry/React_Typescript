import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Timer = () => {
  const [start, setStart] = useState(false);

  const [testTime, setTestTime] = useState(0 as any);
  const [timeBegan, setTimeBegan] = useState(null as any);
  const [timeStopped, setTimeStopped] = useState(null as any);
  const [stoppedDuration, setStoppedDuration] = useState(null as any);
  const started: any = useRef(null);

  const handleToggle = () => {
    setStart(!start);
    if (!start) {
      if (timeBegan === null) {
        setTimeBegan(new Date());
      }
      if (timeStopped !== null) {
        setStoppedDuration(stoppedDuration + new Date() - timeStopped);
      }
      started.current = setInterval(clockRunning, 10);
    } else {
      setTimeStopped(new Date());
      clearInterval(started);
    }
  };

  function reset() {
    clearInterval(started);
    setStoppedDuration(0);
    setTimeBegan(null);
    setTimeStopped(null);
    setTestTime(0);
  }

  function clockRunning() {
    let currentTime: any = new Date(),
      timeElapsed = new Date(currentTime - timeBegan - stoppedDuration),
      hour = timeElapsed.getUTCHours(),
      min = timeElapsed.getUTCMinutes(),
      sec = timeElapsed.getUTCSeconds(),
      ms = timeElapsed.getUTCMilliseconds();

    const time =
      (hour > 9 ? hour : '0' + hour) +
      ':' +
      (min > 9 ? min : '0' + min) +
      ':' +
      (sec > 9 ? sec : '0' + sec) +
      '.' +
      (ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms);
    setTestTime(time);
  }

  return (
    <View>
      <View>
        <Text>{testTime}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={reset}>
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
