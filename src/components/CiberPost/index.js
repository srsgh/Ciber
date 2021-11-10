import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import Video from 'react-native-video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
const Post = props => {
  const [localPost, setLocalPost] = React.useState(props.post);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isPinged, setIsPinged] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const tabBarHeight = useBottomTabBarHeight();
  const onVideoPress = () => {
    setIsPaused(!isPaused);
  };
  const onLikePress = () => {
    const likeUpdate = isLiked ? -1 : 1;
    setLocalPost({
      ...localPost,
      likes: localPost.likes + likeUpdate,
    });
    setIsLiked(!isLiked);
  };
  const onPingPress = () => {
    setIsPinged(!isPinged);
  };
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#111',
        height: Dimensions.get('window').height - tabBarHeight,
      }}>
      <TouchableWithoutFeedback onPress={onVideoPress}>
        <Video
          source={{
            uri: localPost.videoURI,
          }}
          style={styles.video}
          resizeMode={'cover'}
          repeat={true}
          paused={isPaused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.layout}>
        <View style={styles.top}>
          {/* <Button title="Connect" color="transparent" /> */}
          <View
            style={{
              padding: 8,
              backgroundColor: localPost.status ? 'green' : 'red',
              borderRadius: 1,
            }}>
            <Text style={styles.topText}>
              {localPost.status ? 'RESOLVED' : 'ISSUE'}
            </Text>
          </View>
        </View>
        <View style={styles.bottomSide}>
          <View style={styles.side}>
            <View style={styles.options}>
              <Image
                source={{
                  uri: localPost.user.ppURI,
                }}
                style={styles.image}
              />
              <Text style={styles.stats}></Text>
            </View>
            <TouchableOpacity style={styles.options} onPress={onPingPress}>
              <FontAwesome5
                name={'hands-helping'}
                size={35}
                color={isPinged ? '#149EF0' : '#eeeeee'}
              />
              <Text style={styles.stats}>PING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={onLikePress}>
              <FontAwesome
                name={'heart'}
                size={35}
                color={isLiked ? '#FF4500' : '#eeeeee'}
              />
              <Text style={styles.stats}>{localPost.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}>
              <FontAwesome name={'commenting'} size={35} color="white" />
              <Text style={styles.stats}>{localPost.comments}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.handle}>@{localPost.user.username}</Text>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail">
            {localPost.desc}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileCard: {
    width: '100%',
    backgroundColor: '#111',
    height: Dimensions.get('window').height - 50,
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
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    // paddingLeft: 8,
  },
});
export default Post;
