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
import {useNavigation} from '@react-navigation/native';
import {Storage} from 'aws-amplify';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getPost} from '../../graphql/queries';
import {updatePost} from '../../graphql/mutations';
const Post = props => {
  const navigation = useNavigation();
  const [videoURI, setVideoURI] = React.useState('');
  const [isPaused, setIsPaused] = React.useState(false);
  const [isPinged, setIsPinged] = React.useState(false);
  const [youLiked, setYouLiked] = React.useState(false);
  const tabBarHeight = useBottomTabBarHeight();
  React.useEffect(() => {
    getVideoURI();
  });
  //fetch VideoUri from Storage for VideoKey(as VideoUri in DynamoDB)
  const getVideoURI = async () => {
    //already exists as http
    if (post.videoURI.startsWith('http')) {
      setVideoURI(post.videoURI);
      return;
    }
    //get videoURI which is VideoKey lookit up in S3 to get VideoURI
    setVideoURI(await Storage.get(post.videoURI));
  };
  const onVideoPress = () => {
    setIsPaused(!isPaused);
  };
  const [post, setPost] = React.useState(props.post);
  // let [localPost, setLocalPost] = React.useState({});
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getVideoURI();
      const fetchPost = async () => {
        try {
          const response = await API.graphql(
            graphqlOperation(getPost, {id: post.id}),
          );
          //
          setPost(response.data.getPost);
        } catch (e) {
          console.error(e);
        }
      };
      fetchPost();
    });
    return unsubscribe;
  });
  const onLikePress = async () => {
    try {
      const likeUpdate = youLiked ? -1 : +1;
      //fetched current in db
      try {
        const response = await API.graphql(
          graphqlOperation(getPost, {id: post.id}),
        );
        setPost(response.data.getPost);
        // console.log(response.data.getPost);
      } catch (e) {
        console.error(e);
      }
      //make updater instance
      const localPost = {
        id: post.id,
        status: post.status,
        videoURI: post.videoURI,
        desc: post.desc,
        userID: post.userID,
        comment: post.comment,
        likes: String(Number(post.likes) + likeUpdate), //102
      };
      //console.log(localPost);
      //update w new instance
      const response = await API.graphql({
        query: updatePost,
        variables: {input: localPost},
      });
      await setYouLiked(!youLiked);
      // console.log(post);
      try {
        const response = await API.graphql(
          graphqlOperation(getPost, {id: post.id}),
        );
        //
        setPost(response.data.getPost);
        console.log(response.data.getPost);
      } catch (e) {
        console.error(e);
      }
    } catch (e) {
      console.error(e);
      setYouLiked(!youLiked);
    }
  };

  const onPingPress = async () => {
    //update the actual pings list for the post then
    try {
      // console.log('PINGED!');
      navigation.navigate('PingBox', {post: post});
      // console.log('PING END!');
    } catch (e) {
      console.error(e);
    }
    setIsPinged(!isPinged);
  };
  const onCommentsPress = async () => {
    try {
      navigation.navigate('Comments', {post: post});
    } catch (e) {
      console.error(e);
    }
  };
  // const onLikePress = async () => {
  //   try {
  //     const likeUpdate = youLiked ? -1 : +1;
  //     //fetched current in db
  //     try {
  //       const response = await API.graphql(
  //         graphqlOperation(getPost, {id: post.id}),
  //       );
  //       setPost(response.data.getPost);
  //       // console.log(response.data.getPost);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     //make updater instance
  //     const localPost = {
  //       id: post.id,
  //       status: post.status,
  //       videoURI: post.videoURI,
  //       desc: post.desc,
  //       userID: post.userID,
  //       comment: post.comment,
  //       likes: String(Number(post.likes) + likeUpdate), //102
  //     };
  //     //console.log(localPost);
  //     //update w new instance
  //     const response = await API.graphql({
  //       query: updatePost,
  //       variables: {input: localPost},
  //     });
  //     await setYouLiked(!youLiked);
  //     // console.log(post);
  //     try {
  //       const response = await API.graphql(
  //         graphqlOperation(getPost, {id: post.id}),
  //       );
  //       //
  //       setPost(response.data.getPost);
  //       console.log(response.data.getPost);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //     setYouLiked(!youLiked);
  //   }
  // };
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
            uri: videoURI,
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
              backgroundColor: post.status ? 'green' : 'red',
              borderRadius: 1,
            }}>
            <Text style={styles.topText}>
              {post.status ? 'RESOLVED' : 'ISSUE'}
            </Text>
          </View>
        </View>
        <View style={styles.bottomSide}>
          <View style={styles.side}>
            <TouchableOpacity
              style={styles.options}
              onPress={() => {
                // console.log(localPost.userID);
                navigation.navigate('NYProfile', {userID: post.userID});
              }}>
              <Image
                source={{
                  uri: post.user.ppURI,
                }}
                style={styles.image}
              />
              <Text style={styles.stats}></Text>
            </TouchableOpacity>
            {post.status ? (
              <View style={styles.options}></View>
            ) : (
              <TouchableOpacity
                // disabled={post.status ? true : false}
                style={styles.options}
                onPress={onPingPress}>
                <FontAwesome5
                  name={'hands-helping'}
                  size={35}
                  color={
                    post.status
                      ? 'transparent'
                      : isPinged
                      ? '#149EF0'
                      : '#eeeeee'
                  }
                />
                <Text textColor={post.status ? '#0000ffff' : 'white'}></Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.options} onPress={onLikePress}>
              <FontAwesome
                name={'heart'}
                size={35}
                color={youLiked ? '#FF4500' : '#eeeeee'}
              />
              <Text style={styles.stats}>{post.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options} onPress={onCommentsPress}>
              <FontAwesome name={'commenting'} size={35} color="white" />
              <Text style={styles.stats}>{post.comment}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.handle}>@{post.user.username}</Text>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail">
            {post.desc}
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
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    // fontWeight: '300',
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
    // fontWeight: '300',
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
    fontWeight: '700',
    color: 'white',
    // paddingLeft: 8,
  },
});
export default Post;
