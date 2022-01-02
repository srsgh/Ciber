import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Text,
  FlatList,
  View,
  ScrollView,
  Button,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createComment, updateComment} from '../../graphql/mutations';
import Toast from 'react-native-simple-toast';
import {updatePost} from '../../graphql/mutations';
import posts from '../../assets/data/posts';
import CommentsItem from '../../components/CommentsItem';
import {listComments, getPost} from '../../graphql/queries';
const Comments = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [content, setContent] = React.useState('');
  const route = useRoute();
  const post = route.params.post;
  //get all the comments of this post into comments
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    const fetchComments = async () => {
      //fetching fitered comments for this post
      try {
        // Query with filters, limits, and pagination
        let filter = {
          postID: {
            eq: post.id, // filter priority = 1
          },
        };
        const response = await API.graphql({
          query: listComments,
          variables: {filter: filter},
        });
        //set the data
        setComments(response.data.listComments.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchComments();
  }, []);
  //to create comment in db API
  const onComment = async () => {
    console.log(post);
    try {
      if (!content.trim()) {
        Toast.show('Please add a comment first.', Toast.SHORT, [
          'UIAlertController',
        ]);
        return;
      }
      const userInfo = await Auth.currentAuthenticatedUser();
      const newComment = {
        postID: post.id,
        content: content.trim(),
        senderusername: userInfo.username,
      };
      const response = await API.graphql(
        graphqlOperation(createComment, {input: newComment}),
      );
      const res = await API.graphql(graphqlOperation(getPost, {id: post.id}));
      const localPost = {
        id: res.data.getPost.id,
        status: res.data.getPost.status,
        videoURI: res.data.getPost.videoURI,
        desc: res.data.getPost.desc,
        userID: res.data.getPost.userID,
        likes: res.data.getPost.likes,
        comment: String(Number(res.data.getPost.comment) + 1), //102
      };
      const res1 = await API.graphql({
        query: updatePost,
        variables: {input: localPost},
      });
      //reload comments
      try {
        // Query with filters, limits, and pagination
        let filter = {
          postID: {
            eq: post.id, // filter priority = 1
          },
        };
        const res2 = await API.graphql({
          query: listComments,
          variables: {filter: filter},
        });
        //set the data
        setComments(res2.data.listComments.items);
      } catch (e) {
        console.error(e);
      }
      setContent('');
      Toast.show('Comment posted successfully!');
      // navigation.navigate('Home');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <KeyboardAvoidingView>
      <SafeAreaView
        style={{
          width: '100%',
          height: Dimensions.get('window').height - tabBarHeight,
          backgroundColor: 'white',
        }}>
        {/* <View
          style={{
            // flex: 1,
            // flexDirection: 'column',
            backgroundColor: 'white',
          }}> */}
        <Text style={styles.header}>Comments</Text>
        <Button
          title="Go Back "
          color="black"
          onPress={() => navigation.navigate('Home')}
        />
        <>
          <View style={styles.descs}>
            {/* <Text style={styles.descsHeader}>ADD A COMMENT</Text> */}
            <TextInput
              style={styles.desc}
              value={content}
              onChangeText={setContent}
              numberOfLines={5}
              multiline
              placeholder="Type your comment here..."
            />
            <Button title="Comment" color="black" onPress={onComment} />
          </View>
        </>
        <View style={{padding: 8}}>
          <Text style={styles.descsHeader}>SEE PREVIOUS COMMENTS</Text>
        </View>
        <View style={styles.description}>
          <SafeAreaView style={styles.descs}>
            <View>
              <FlatList
                data={comments}
                ListHeaderComponent={<></>}
                ListFooterComponent={
                  <View
                    style={{
                      paddingBottom: '100%',
                      // flex: 1,
                      paddingTop: 20,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignContent: 'flex-end',
                    }}>
                    <Text style={{}}>C!ber 👽</Text>
                  </View>
                }
                renderItem={({item}) => <CommentsItem comment={item} />}
              />
            </View>
          </SafeAreaView>
        </View>
        {/* </View> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
    color: 'black',
  },

  description: {
    margin: 8,
  },
  desc: {
    // flex: 1,
    padding: 8,
    marginTop: 5,
    fontSize: 16,
    color: 'black',
    backgroundColor: '#eeeeee',
  },
  res1loc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descs: {padding: 8},
  descsHeader: {fontSize: 16, fontWeight: '700', color: 'black'},
  projectTitle: {flexDirection: 'row', alignItems: 'center'},
  projectTitleName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0077D6',
    marginRight: 5,
  },
  ping: {
    padding: 8,
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    // backgroundColor: '#eeeeee',
  },
  pingLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  pingRight: {
    marginLeft: 8,
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '300',
    color: '#545454',
  },
});

export default Comments;
