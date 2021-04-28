import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
//문제점 정지와 시작을 반복해서 누르다보면 setInterval 때문에 오차가 갈수록생김
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

  const startTimer = () => {
    const startedTime: any = new Date();
    setStart(!start);
    if (!start) {
      if (sectionTimer !== '00 : 00 : 00 . 000') {
        startSectionRecord(startedTime);
      }

      started.current = setInterval(() => {
        const currentTime: number = +new Date(),
          timeElapsed = new Date(currentTime - +startedTime);
        let hour = timeElapsed.getUTCHours(),
          min = timeElapsed.getUTCMinutes(),
          sec = timeElapsed.getUTCSeconds(),
          ms = timeElapsed.getUTCMilliseconds();

        if (timer !== '00 : 00 : 00 . 000') {
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
          ' : ' +
          (min > 9 ? min : '0' + min) +
          ' : ' +
          (sec > 9 ? sec : '0' + sec) +
          ' . ' +
          (ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms);
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
    const startedTime: number = +new Date();

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

  const startSectionRecord = (startedTime: any) => {
    sectionStarted.current = setInterval(() => {
      const currentTime: number = +new Date();
      let timeElapsed: any;
      let tempH = 0,
        tempM = 0,
        tempS = 0,
        tempMs = 0;
      if (typeof startedTime === 'number') {
        timeElapsed = new Date(currentTime - startedTime);
      } else {
        timeElapsed = new Date(currentTime - +startedTime);
        tempH += +sectionTimer.split(':')[0];
        tempM += +sectionTimer.split(':')[1];
        tempS += +sectionTimer.split(':')[2].split('.')[0];
        tempMs += +sectionTimer.split(':')[2].split('.')[1];
        if (timeElapsed.getUTCMilliseconds() + tempMs >= 1000) {
          tempS++;
          tempMs -= 1000;
        }
      }
      let hour = timeElapsed.getUTCHours() + tempH,
        min = timeElapsed.getUTCMinutes() + tempM,
        sec = timeElapsed.getUTCSeconds() + tempS,
        ms = timeElapsed.getUTCMilliseconds() + tempMs;

      const time =
        (hour > 9 ? hour : '0' + hour) +
        ' : ' +
        (min > 9 ? min : '0' + min) +
        ' : ' +
        (sec > 9 ? sec : '0' + sec) +
        ' . ' +
        (ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms);
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
