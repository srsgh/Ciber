import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import VideoCard from './src/components/CiberCard/index.js';
const App = () => {
  return (
    <View style={styles.main}>
      <VideoCard />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {alignItems: 'center', justifyContent: 'center', flex: 1},
  //   profileCard: {
  //     // width: '95%',
  //     // height: '90%',
  //     // borderRadius: 10,
  //     width: '100%',
  //     height: Dimensions.get('window').height,
  //   },
  //   image: {
  //     width: 60,
  //     height: 60,
  //     borderRadius: 100,
  //     borderWidth: 4,
  //     borderColor: 'white',
  //     marginBottom: 8,
  //   },
  //   video: {
  //     position: 'absolute',
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     // borderRadius: 10,
  //   },
  //   bottomSide: {
  //     height: '100%',
  //     padding: 8,
  //     justifyContent: 'flex-end',
  //   },
  //   side: {
  //     // backgroundColor: 'yellow',
  //     justifyContent: 'center',
  //     alignItems: 'flex-end',
  //   },
  //   handle: {
  //     fontSize: 16,
  //     fontWeight: 'bold',
  //     color: 'white',
  //     marginBottom: 8,
  //   },
  //   description: {
  //     fontSize: 16,
  //     fontWeight: '300',
  //     color: 'white',
  //     marginBottom: 8,
  //   },
});
export default App;
