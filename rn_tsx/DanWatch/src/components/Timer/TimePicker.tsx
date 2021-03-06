import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState, VFC} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  selectTime: number;
  setSelectTime: React.Dispatch<React.SetStateAction<number>>;
  setExtraTime: React.Dispatch<React.SetStateAction<number>>;
  setStartPossible: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimePicker: VFC<Props> = ({
  selectTime,
  setSelectTime,
  setExtraTime,
  setStartPossible,
}) => {
  const [time, setTime] = useState({
    hour: [] as Element,
    min: [] as Element,
    sec: [] as Element,
  });

  useEffect(() => {
    const h: number[] = [],
      m: number[] = [];
    for (let i = 0; i <= 24; i++) {
      h.push(i);
    }
    for (let i = 0; i < 60; i++) {
      m.push(i);
    }
    const linkTime = {
      hour: h.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
      min: m.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
      sec: m.map((item: number, index: number) => (
        <Picker.Item
          key={index}
          label={item < 10 ? `0${item}` : item + ''}
          value={item}
        />
      )),
    };
    setTime(linkTime);
  }, []);

  const onChangeTime = (value: number, kind: string) => {
    let initVal;
    if (kind === 'sec' && value !== 0) {
      initVal = (selectTime % 3600) % 60;
    } else if (kind === 'min' && value !== 0) {
      initVal = Math.floor((selectTime % 3600) / 60) * 60;
    } else if (kind === 'hour' && value !== 0) {
      initVal = Math.floor(selectTime / 3600) * 3600;
    } else {
      if (kind === 'sec') {
        initVal = (selectTime % 3600) % 60;
      } else if (kind === 'min') {
        initVal = Math.floor((selectTime % 3600) / 60) * 60;
      } else {
        initVal = Math.floor(selectTime / 3600) * 3600;
      }
    }
    const nextTime = selectTime + value - initVal;
    setSelectTime(nextTime);
    setExtraTime(nextTime);

    if (nextTime !== 0) {
      setStartPossible(true);
    } else {
      setStartPossible(false);
    }
  };
  return (
    <View style={styles.container}>
      <Picker
        itemStyle={styles.pickerFonts}
        style={styles.pickerStyles}
        selectedValue={Math.floor(selectTime / 3600)}
        onValueChange={(val: number) => {
          onChangeTime(val * 3600, 'hour');
        }}>
        {time.hour}
      </Picker>
      <Picker
        itemStyle={styles.pickerFonts}
        style={styles.pickerStyles}
        selectedValue={Math.floor((selectTime % 3600) / 60)}
        onValueChange={(val: number) => {
          onChangeTime(val * 60, 'min');
        }}>
        {time.min}
      </Picker>
      <Picker
        itemStyle={styles.pickerFonts}
        style={styles.pickerStyles}
        selectedValue={(selectTime % 3600) % 60}
        onValueChange={(val: number) => {
          onChangeTime(val, 'sec');
        }}>
        {time.sec}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerFonts: {
    fontSize: 35,
  },
  pickerStyles: {
    height: 80,
    width: 120,
  },
});

export default React.memo(TimePicker);
