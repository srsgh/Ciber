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
const App = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const onVideoPress = () => {
    setIsPaused(!isPaused);
  };
  return (
    <View style={styles.main}>
      <View style={styles.profileCard}>
        {/* <Image
          source={{
            uri: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
          }}
          style={styles.image}
        /> */}
        <TouchableWithoutFeedback onPress={onVideoPress}>
          <Video
            source={{
              uri: 'https://player.vimeo.com/external/500620909.sd.mp4?s=fedc9a991e20c92108928e333e13e5dd9eda5cc5&profile_id=165&oauth2_token_id=57447761',
            }}
            style={styles.video}
            resizeMode={'cover'}
            repeat={true}
            paused={isPaused}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {alignItems: 'center', justifyContent: 'center', flex: 1},
  profileCard: {
    width: '95%',
    height: '90%',
    borderRadius: 10,
    // height: Dimensions.get('window').height,
  },
  image: {width: '100%', height: '100%', borderRadius: 10},
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
});
export default App;
