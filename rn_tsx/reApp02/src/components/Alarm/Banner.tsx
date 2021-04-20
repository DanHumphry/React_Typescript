import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Banner = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.h1font}>날씨정보있어도 괜찮을듯</Text>
      <Text style={styles.h1font}>15분 후에 울릴 예정</Text>
      <View style={styles.bannerLeftIcon}>
        <SimpleLineIcon name="options-vertical" size={20} />
      </View>
      <View style={styles.bannerRightIcon}>
        <AntIcon
          onPress={() => {
            navigation.navigate('AlarmDetail');
          }}
          name="pluscircle"
          size={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4d4d4d',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1font: {
    fontSize: 32,
  },
  bannerLeftIcon: {
    position: 'absolute',
    bottom: 10,
    left: 15,
  },
  bannerRightIcon: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
});

export default Banner;
