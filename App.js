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
        <View style={styles.bottomSide}>
          <View style={styles.side}>
            <Image
              source={{
                uri: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.handle}>@creatername</Text>
          <Text style={styles.description}>some random description</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {alignItems: 'center', justifyContent: 'center', flex: 1},
  profileCard: {
    // width: '95%',
    // height: '90%',
    // borderRadius: 10,
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 8,
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // borderRadius: 10,
  },
  bottomSide: {
    height: '100%',
    padding: 8,
    justifyContent: 'flex-end',
  },
  side: {
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  handle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    marginBottom: 8,
  },
});
export default App;
