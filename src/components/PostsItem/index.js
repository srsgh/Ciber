import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {updatePost} from '../../graphql/mutations'; //operation for mutation
import {getPost} from '../../graphql/queries';
const PostsItem = props => {
  const [post, setPost] = React.useState({});
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchUser = async () => {
        try {
          const response = await API.graphql(
            graphqlOperation(getPost, {id: props.post.id}),
          );
          //set the data locally
          await setPost(response.data.getPost);
          setIsOpen(!response.data.getPost.status);
        } catch (e) {
          console.error(e);
        }
      };
      fetchUser();
    });
    return unsubscribe;
  }, [navigation]);
  const onClosePress = async () => {
    try {
      //fetch
      try {
        const response = await API.graphql(
          graphqlOperation(getPost, {id: props.post.id}),
        );
        setPost(response.data.getPost);
      } catch (e) {
        console.error(e);
      }
      //updater obj
      const localPost = {
        id: post.id,
        status: !response.data.getPost.status,
        videoURI: post.videoURI,
        desc: post.desc,
        userID: post.userID,
        likes: post.likes,
        comment: post.comment,
      };
      //update
      const response = await API.graphql({
        query: updatePost,
        variables: {input: localPost},
      });
      setIsOpen(!isOpen); //change is open
      //go back; fetch updated post again
      const resp2 = await API.graphql(graphqlOperation(getPost, {id: post.id}));
      //
      setPost(resp2.data.getPost);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.ping}>
      <View style={styles.pingRight}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* <Text style={styles.handle}>{localPost.user.username}</Text> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.statsinnercontainer}>
              <FontAwesome
                name={'heart'}
                style={{paddingRight: 2}}
                size={16}
                color="red" // color={isLiked ? '#FF4500' : '#eeeeee'}
              />
              <Text style={styles.handle}>{post.likes}</Text>
            </View>
            <View style={styles.statsinnercontainer}>
              <FontAwesome
                name={'commenting'}
                size={16}
                color="black" // color={isLiked ? '#FF4500' : '#eeeeee'}
                style={{paddingRight: 2}}
              />
              <Text style={styles.handle}>{post.comment}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.message}>"{post.desc}"</Text>
        <View>
          <Button
            onPress={onClosePress}
            title={isOpen ? 'CLOSE' : 'CLOSED'}
            color={isOpen ? 'black' : 'gray'}
          />
        </View>
      </View>
    </View>
  );
};
export default PostsItem;

const styles = StyleSheet.create({
  statsinnercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
  },
  handle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  ping: {
    padding: 8,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    // backgroundColor: '#eeeeee',
  },
  pingRight: {
    marginLeft: 8,
    marginRight: 8,
    flex: 1,
    justifyContent: 'flex-start',
  },
  message: {
    fontSize: 16,
    // fontWeight: '300',
    color: '#545454',
  },
});
