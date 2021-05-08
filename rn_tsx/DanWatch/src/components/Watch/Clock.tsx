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
  const [timer, setTimer] = useState(0);
  const [sectionTimer, setSectionTimer] = useState(0);

  const [tableDataId, setTableDataId] = useState(0);

  const startTimer = () => {
    const startedTime: number = Date.now();
    if (!start) {
      if (sectionTimer !== 0) {
        startSectionRecord(startedTime);
      }
      started.current = setInterval(() => {
        setTimer(Date.now() - startedTime + timer);
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
    setTimer(0);
    setSectionTimer(0);
    setTableData([]);
    setTableDataId(0);
  };

  const makeLap = () => {
    const startedTime: Date = new Date();
    const init: any = [...tableData];
    tableDataId !== 0
      ? init.push([
          tableDataId,
          UseParseClock(timer - UseParseMilli(init[tableDataId - 1][2])),
          UseParseClock(timer),
        ])
      : init.push([tableDataId, '00 : 00 : 00 . 000', UseParseClock(timer)]);
    setTableData(init);
    if (typeof sectionStarted.current === 'number') {
      clearInterval(sectionStarted.current);
    }
    setSectionTimer(0);
    startSectionRecord(startedTime);
    setTableDataId(v => ++v);
  };

  const startSectionRecord = (startedTime: number | Date) => {
    sectionStarted.current = setInterval(() => {
      typeof startedTime === 'number'
        ? setSectionTimer(Date.now() - startedTime + sectionTimer)
        : setSectionTimer(Date.now() - +startedTime);
    }, 10);
  };
  return (
    <>
      <View style={styles.parent}>
        <Text style={styles.child}>{UseParseClock(timer)}</Text>
      </View>
      <View>
        <Text style={styles.sectionTimerFont}>
          {UseParseClock(sectionTimer)}
        </Text>
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
  sectionTimerFont: {
    fontSize: 15,
  },
  buttonParent: {
    flexDirection: 'row',
    marginTop: '8%',
  },
  button: {
    width: 90,
    height: 50,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
    marginLeft: '3%',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Clock;
