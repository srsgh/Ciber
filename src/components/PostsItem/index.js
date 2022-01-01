import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {updatePost} from '../../graphql/mutations'; //operation for mutation
import {getPost} from '../../graphql/queries';
const PostsItem = props => {
  const [localPost, setLocalPost] = React.useState({
    id: props.post.id,
    status: props.post.status,
    videoURI: props.post.videoURI,
    desc: props.post.desc,
    userID: props.post.userID,
    likes: props.post.likes,
    comment: props.post.comment,
  });
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(!localPost.status);

  const onClosePress = async () => {
    // setIsOpen(!isOpen);
    try {
      // console.log(localPost.status);
      // console.log(isOpen);

      setLocalPost({...localPost, status: !localPost.status}); //status chnage

      // console.log(localPost);

      const response = await API.graphql({
        query: updatePost,
        variables: {input: localPost},
      });
      setIsOpen(!isOpen); //change is open
      //go back
      // navigation.navigate('Profile');

      // console.log(localPost.status);
      // console.log(isOpen);
      // console.log(response);
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
              <Text style={styles.handle}>{localPost.likes}</Text>
            </View>
            <View style={styles.statsinnercontainer}>
              <FontAwesome
                name={'commenting'}
                size={16}
                color="black" // color={isLiked ? '#FF4500' : '#eeeeee'}
                style={{paddingRight: 2}}
              />
              <Text style={styles.handle}>{localPost.comment}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.message}>"{localPost.desc}"</Text>
        <View>
          <Button
            onPress={onClosePress}
            title={isOpen ? 'CLOSE' : 'CLOSED'}
            // color={isOpen ? '#FF9900' : 'gray'}
            color={isOpen ? 'black' : 'gray'}
            // disabled={isOpen ? 'true' : 'false'}
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
