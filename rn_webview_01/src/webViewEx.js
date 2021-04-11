import * as React from 'react';
import WebView from 'react-native-webview';
import {Platform, View} from 'react-native';
import AndBrowser from './AndWeb';

const webViewEx = () => {
  const androidPlatform = <AndBrowser />;

  // const localFile =
  //   Platform.OS === 'ios' ? require('./sample.html') : null;

  return (
    <View>
      <View>{Platform.OS === 'ios' ? null : androidPlatform}</View>
    </View>
  );
};

export default webViewEx;
