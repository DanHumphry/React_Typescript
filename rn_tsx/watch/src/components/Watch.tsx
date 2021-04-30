import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
//문제점1. 정지와 시작을 반복해서 누르다보면 setInterval 때문에 오차가 갈수록생김
//문제점2. 구간기록이 조금씩 차이가 남 -> 구간기록은 무조건 전체기록의 단계별 뺄셈으로 구하기.
const StopWatch = () => {
  const started: any = useRef(null);
  const sectionStarted: any = useRef(null);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState('00 : 00 : 00 . 000');
  const [sectionTimer, setSectionTimer] = useState('00 : 00 : 00 . 000');
  const [tableDataId, setTableDataId] = useState(0);

  const tableHead = ['구간', '구간기록', '전체기록'];
  const [tableData, setTableData] = useState([]);
  const scrollBar: any = useRef(null);

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

  const startTimer = () => {
    const startedTime: number = +new Date();
    setStart(!start);
    if (!start) {
      if (sectionTimer !== '00 : 00 : 00 . 000') {
        startSectionRecord(startedTime);
      }

      const progressed = parseMilli(timer);
      started.current = setInterval(() => {
        const currentTime: number = +new Date(),
          timeElapsed = new Date(currentTime - startedTime + progressed);

        const time = parseClock(
          timeElapsed.getUTCHours(),
          timeElapsed.getUTCMinutes(),
          timeElapsed.getUTCSeconds(),
          timeElapsed.getUTCMilliseconds(),
        );
        setTimer(time);
      }, 10);
    } else {
      clearInterval(started.current);
      clearInterval(sectionStarted.current);
    }
  };

  const reset = () => {
    clearInterval(started.current);
    clearInterval(sectionStarted.current);
    setStart(false);
    setTimer('00 : 00 : 00 . 000');
    setSectionTimer('00 : 00 : 00 . 000');
    setTableData([]);
    setTableDataId(0);
  };

  const makeLap = () => {
    const startedTime: Date = new Date();
    const init: any = [...tableData];
    init.push([tableDataId, sectionTimer, timer]);
    setTableData(init);
    clearInterval(sectionStarted.current);
    setSectionTimer('00 : 00 : 00 . 000');
    startSectionRecord(startedTime);
    setTableDataId(v => ++v);
  };

  useEffect(() => {
    scrollBar.current?.scrollToEnd({animated: true});
  }, [tableData]);

  const startSectionRecord = (startedTime: number | Date) => {
    const progressed = parseMilli(sectionTimer);
    sectionStarted.current = setInterval(() => {
      const currentTime: number = +new Date();
      const timeElapsed =
        typeof startedTime === 'number'
          ? new Date(currentTime - startedTime + progressed)
          : new Date(currentTime - +startedTime);

      const time = parseClock(
        timeElapsed.getUTCHours(),
        timeElapsed.getUTCMinutes(),
        timeElapsed.getUTCSeconds(),
        timeElapsed.getUTCMilliseconds(),
      );
      setSectionTimer(time);
    }, 10);
  };

  return (
    <View style={styles.container}>
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
      <View style={{flexDirection: 'row', width: 350}}>
        <View style={styles.tableContainer}>
          <Table>
            <Row
              flexArr={[1, 3, 3]}
              data={tableHead}
              style={styles.tableHeader}
              textStyle={styles.headerText}
            />
          </Table>
        </View>
      </View>
      <ScrollView style={styles.scroll} ref={scrollBar}>
        <View style={{flexDirection: 'row', width: 350}}>
          <View style={styles.tableContainer}>
            <Table>
              <Rows
                flexArr={[1, 3, 3]}
                data={tableData}
                textStyle={styles.itemText}
              />
            </Table>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
  },
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
  scroll: {
    maxHeight: '55%',
    marginTop: '5%',
  },
  tableContainer: {
    flex: 1,
  },
  tableHeader: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  headerText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 21,
  },
  itemText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    margin: 6,
  },
});
export default StopWatch;
