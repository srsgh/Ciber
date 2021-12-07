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
import {listComments} from '../../graphql/queries';
const Comments = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [content, setContent] = React.useState('');
  const route = useRoute();
  const post = route.params.post;
  //get all the comments of this post into comments
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    const fetchComments = async () => {
      //fetching all comments
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

        // const response = await API.graphql(graphqlOperation(listComments));
        //set the data
        setComments(response.data.listComments.items);
        console.log(response); ////////////CHANGE
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
      //   console.log(userInfo);
      //   console.log(typeof userInfo.username);
      const newComment = {
        postID: post.id,
        content: content.trim(),
        senderusername: userInfo.username,
      };
      const response = await API.graphql(
        graphqlOperation(createComment, {input: newComment}),
      );
      //go back

      //TASK: ADD:   comment , i.e. count updating
      //   const updatedPost = {...post, comment: post.comment + 1};
      //   const response2 = await API.graphql(
      //     graphqlOperation(updatePost, {input: updatedPost}),
      //   );

      Toast.show('Comment posted successfully!');
      navigation.navigate('Home');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <KeyboardAvoidingView>
      <View
        style={{
          width: '100%',
          height: Dimensions.get('window').height - tabBarHeight,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',
          }}>
          <Text style={styles.header}>Comments</Text>
          <Button
            title="Go Back "
            color="black"
            onPress={() => navigation.navigate('Home')}
          />
          <View style={styles.description}>
            <View style={styles.descs}>
              <Text style={styles.descsHeader}>ADD A COMMENT</Text>
              <ScrollView>
                <TextInput
                  style={styles.desc}
                  value={content}
                  onChangeText={setContent}
                  numberOfLines={5}
                  multiline
                  placeholder="Type your comment here..."
                />
              </ScrollView>
              <Button title="Comment" color="black" onPress={onComment} />
            </View>
            <View style={styles.descs}>
              <Text style={styles.descsHeader}>SEE PREVIOUS COMMENTS</Text>
            </View>
            <ScrollView style={styles.descs}>
              <View style={styles.pings}>
                <FlatList
                  data={comments}
                  renderItem={({item}) => <CommentsItem comment={item} />}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
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
