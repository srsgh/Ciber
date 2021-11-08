import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Button,
} from 'react-native';
import Video from 'react-native-video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
const VideoCard = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const onVideoPress = () => {
    setIsPaused(!isPaused);
  };
  return (
    <View style={styles.profileCard}>
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
      <View style={styles.layout}>
        <View style={styles.top}>
          <Button title="Connect" color="transparent" />
          {/* <Text style={styles.topText}>Connect</Text> */}
          <Text style={styles.topText}>EXPLORE</Text>
        </View>
        <View style={styles.bottomSide}>
          <View style={styles.side}>
            <View style={styles.options}>
              <Image
                source={{
                  uri: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.options}>
              <FontAwesome5 name={'hands-helping'} size={40} color="white" />
              <Text style={styles.stats}>PING</Text>
            </View>
            <View style={styles.options}>
              <FontAwesome name={'heart'} size={40} color="white" />
              <Text style={styles.stats}>143</Text>
            </View>
            <View style={styles.options}>
              <FontAwesome name={'commenting'} size={40} color="white" />
              <Text style={styles.stats}>143</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.handle}>@creatername</Text>
            {/* <Button title={'Connect'} /> */}
          </View>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail">
            some random descriptionsome random description some random
            description some random description description some random
            description some random descriptionsome random description some
            random description some random description description some random
            description some random descriptionsome random description some
            random description some random description description some random
            description
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileCard: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    // marginBottom: 8,
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // borderRadius: 10,
  },
  layout: {
    height: '100%',
    justifyContent: 'space-between',
  },
  bottomSide: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
  },
  side: {
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '45%',
    marginBottom: 8,
  },
  handle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    marginBottom: 8,
  },
  options: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stats: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
  },
  top: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    paddingLeft: 8,
  },
});
export default VideoCard;
