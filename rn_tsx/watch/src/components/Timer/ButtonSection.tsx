import React, {VFC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  start: boolean;
  Pause: () => void;
  pauseAndContinue: boolean;
  startTimer: () => void;
  startPossible: boolean;
}

const ButtonSection: VFC<Props> = ({
  start,
  Pause,
  pauseAndContinue,
  startTimer,
  startPossible,
}) => {
  return (
    <View style={styles.buttonSection}>
      {start ? (
        <TouchableOpacity
          style={styles.buttonSectionButton}
          onPress={() => {
            Pause();
          }}>
          <Text style={styles.buttonSectionText}>
            {pauseAndContinue ? 'continue' : 'Pause'}
          </Text>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        style={styles.buttonSectionButton}
        onPress={() => {
          startTimer();
        }}
        disabled={!startPossible}>
        <Text style={styles.buttonSectionText}>
          {start ? 'Cancel' : 'Start'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSectionButton: {
    marginLeft: 5,
    marginRight: 5,
  },
  buttonSectionText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '600',
    padding: 22,
  },
});

export default React.memo(ButtonSection);
