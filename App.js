import React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Home from './src/screens/Home/index.js';
const App = () => {
  return (
    <View>
      <Home />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default App;
