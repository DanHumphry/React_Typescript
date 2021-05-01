import React, {useRef, useState, VFC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UseParseClock from '@hooks/UseParseClock';
import UseParseMilli from '@hooks/UseParseMilli';

interface Props {
  tableData: never[];
  setTableData: React.Dispatch<React.SetStateAction<never[]>>;
}

const Clock: VFC<Props> = ({tableData, setTableData}) => {
  const started = useRef<number | NodeJS.Timeout | null>(null);
  const sectionStarted = useRef<number | NodeJS.Timeout | null>(null);

  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState('00 : 00 : 00 . 000');
  const [sectionTimer, setSectionTimer] = useState('00 : 00 : 00 . 000');

  const [tableDataId, setTableDataId] = useState(0);

  const startTimer = () => {
    const startedTime: number = +new Date();
    if (!start) {
      if (sectionTimer !== '00 : 00 : 00 . 000') {
        startSectionRecord(startedTime);
      }
      const progressed = UseParseMilli(timer);
      started.current = setInterval(() => {
        const currentTime: number = +new Date(),
          timeElapsed = new Date(currentTime - startedTime + progressed);
        const time = UseParseClock(timeElapsed.getTime());
        setTimer(time);
      }, 10);
    } else {
      clearInterval(started.current as number);
      clearInterval(sectionStarted.current as number);
    }
    setStart(!start);
  };

  const reset = () => {
    clearInterval(started.current as number);
    clearInterval(sectionStarted.current as number);
    setStart(false);
    setTimer('00 : 00 : 00 . 000');
    setSectionTimer('00 : 00 : 00 . 000');
    setTableData([]);
    setTableDataId(0);
  };

  const makeLap = () => {
    const startedTime: Date = new Date();
    const init: any = [...tableData];
    if (tableDataId !== 0) {
      const LapTime = UseParseClock(
        UseParseMilli(timer) - UseParseMilli(init[tableDataId - 1][2]),
      );
      init.push([tableDataId, LapTime, timer]);
    } else {
      init.push([tableDataId, '00 : 00 : 00 . 000', timer]);
    }
    setTableData(init);
    if (typeof sectionStarted.current === 'number') {
      clearInterval(sectionStarted.current);
    }
    setSectionTimer('00 : 00 : 00 . 000');
    startSectionRecord(startedTime);
    setTableDataId(v => ++v);
  };

  const startSectionRecord = (startedTime: number | Date) => {
    const progressed = UseParseMilli(sectionTimer);
    sectionStarted.current = setInterval(() => {
      const currentTime: number = +new Date();
      const timeElapsed =
        typeof startedTime === 'number'
          ? new Date(currentTime - startedTime + progressed)
          : new Date(currentTime - +startedTime);
      const time = UseParseClock(timeElapsed.getTime());
      setSectionTimer(time);
    }, 10);
  };
  return (
    <>
      <View style={styles.parent}>
        <Text style={styles.child}>{timer}</Text>
      </View>
      <View>
        <Text style={{fontSize: 15}}>{sectionTimer}</Text>
      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>초기화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <Text style={styles.buttonText}>{start ? '정지' : '시작'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={makeLap}
          disabled={!start}>
          <Text style={styles.buttonText}>구간기록</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
  },
  child: {
    fontSize: 42,
  },
  buttonParent: {
    flexDirection: 'row',
    marginTop: '8%',
  },
  button: {
    padding: '5%',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Clock;
