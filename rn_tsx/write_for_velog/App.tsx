import React, {useState, useRef} from 'react';
import {View, Text, Button} from 'react-native';

function App() {
  const [start, setStart] = useState(true);

  const [time, setTime] = useState(0);
  const timeStarted = useRef<number | NodeJS.Timeout | null>(null);

  const [date, setDate] = useState(0);
  const dateStarted = useRef<number | NodeJS.Timeout | null>(null);

  const runTime = () => {
    const startedTime = Date.now();
    setStart(!start);
    if (start) {
      timeStarted.current = setInterval(() => setTime(v => ++v), 10);
      dateStarted.current = setInterval(
        () => setDate(Date.now() - startedTime),
        10,
      );
    } else {
      clearInterval(timeStarted.current as NodeJS.Timeout);
      clearInterval(dateStarted.current as NodeJS.Timeout);
      setTime(0);
      setDate(0);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>time : {time}</Text>
      <Text style={{fontSize: 30}}>date : {date}</Text>
      <Button onPress={runTime} title={start ? '시작' : '정지'} />
    </View>
  );
}
export default App;
