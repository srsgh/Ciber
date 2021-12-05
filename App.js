import React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Home from './src/screens/Home/index.js';
import RootNavigation from './src/navigation/index.js';
import {withAuthenticator} from 'aws-amplify-react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      {/* <Home /> */}
      <RootNavigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default withAuthenticator(App);
