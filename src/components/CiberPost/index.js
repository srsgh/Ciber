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
const Post = props => {
  const [isPaused, setIsPaused] = React.useState(false);
  const onVideoPress = () => {
    setIsPaused(!isPaused);
  };
  return (
    <View style={styles.profileCard}>
      <TouchableWithoutFeedback onPress={onVideoPress}>
        <Video
          source={{
            uri: props.post.videoURI,
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
          <Text style={styles.topText}>EXPLORE</Text>
        </View>
        <View style={styles.bottomSide}>
          <View style={styles.side}>
            <View style={styles.options}>
              <Image
                source={{
                  uri: props.post.user.ppURI,
                }}
                style={styles.image}
              />
              <Text style={styles.stats}></Text>
            </View>
            <View style={styles.options}>
              <FontAwesome5 name={'hands-helping'} size={35} color="white" />
              <Text style={styles.stats}>PING</Text>
            </View>
            <View style={styles.options}>
              <FontAwesome name={'heart'} size={35} color="white" />
              <Text style={styles.stats}>{props.post.likes}</Text>
            </View>
            <View style={styles.options}>
              <FontAwesome name={'commenting'} size={35} color="white" />
              <Text style={styles.stats}>{props.post.comments}</Text>
            </View>
          </View>
          <Text style={styles.handle}>@{props.post.user.username}</Text>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail">
            {props.post.desc}
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
    width: 55,
    height: 55,
    borderRadius: 30,
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
export default Post;
