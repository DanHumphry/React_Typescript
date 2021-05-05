import React, {useRef, useState, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UseParseClock from '@hooks/UseParseClock';
import UseParseMilli from '@hooks/UseParseMilli';
import BellModal from '@components/Timer/BellModal';
import TimePicker from '@components/Timer/TimePicker';
import ButtonSection from '@components/Timer/ButtonSection';

const Timer = () => {
  const [start, setStart] = useState(false);
  const [pauseAndContinue, setPauseAndContinue] = useState(false);
  const [selectTime, setSelectTime] = useState(0);
  const [extraTime, setExtraTime] = useState('00 : 00 : 00 : 000');

  const [startPossible, setStartPossible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const started = useRef<number | NodeJS.Timeout | null>(null);
  const startedForTimer = useRef<number | NodeJS.Timeout | null>(null);

  const completeTimer = () => {
    setExtraTime('00 : 00 : 00 : 000');
    clearInterval(started.current as number);
    setStart(false);
    setModalVisible(true);
  };

  const startTimer = useCallback(() => {
    const startedTime: number = +new Date();
    if (!start) {
      startedForTimer.current = setTimeout(completeTimer, selectTime * 1000);

      started.current = setInterval(() => {
        const timeElapsed = new Date(
          startedTime - +new Date() + selectTime * 1000,
        );
        setExtraTime(UseParseClock(timeElapsed.getTime()));
      }, 10);
    } else {
      if (
        typeof started.current === 'number' &&
        typeof startedForTimer.current === 'number'
      ) {
        clearInterval(started.current);
        clearTimeout(startedForTimer.current);
        setPauseAndContinue(false);
      }
    }
    setStart(!start);
  }, [selectTime, start]);

  const Pause = useCallback(() => {
    setPauseAndContinue(!pauseAndContinue);
    if (!pauseAndContinue) {
      clearInterval(started.current as number);
      clearTimeout(startedForTimer.current as number);
    } else {
      const extra = UseParseMilli(extraTime);
      const startedTime: number = +new Date();

      startedForTimer.current = setTimeout(completeTimer, extra);

      started.current = setInterval(() => {
        const timeElapsed = new Date(startedTime - +new Date() + extra);
        setExtraTime(UseParseClock(timeElapsed.getTime()));
      }, 10);
    }
  }, [extraTime, pauseAndContinue]);

  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.clockSection}>
          <BellModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />

          {start ? (
            <View style={styles.parent}>
              <Text style={styles.child}>{extraTime}</Text>
            </View>
          ) : (
            <TimePicker
              selectTime={selectTime}
              setSelectTime={setSelectTime}
              setExtraTime={setExtraTime}
              setStartPossible={setStartPossible}
            />
          )}
        </View>
        <ButtonSection
          start={start}
          Pause={Pause}
          pauseAndContinue={pauseAndContinue}
          startTimer={startTimer}
          startPossible={startPossible}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  parent: {
    flexDirection: 'row',
  },
  child: {
    marginTop: 150,
    fontSize: 42,
  },
});

export default Timer;
