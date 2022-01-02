import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';
import PostsItem from '../../components/PostsItem';
import {useNavigation} from '@react-navigation/native';

const Posts = () => {
  const navigation = useNavigation();
  //get all the posts of this user
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchPosts = async () => {
        //fetching fitered comments for this post
        try {
          const userInfo = await Auth.currentAuthenticatedUser();
          // Query with filters, limits, and pagination
          let filter = {
            userID: {
              eq: userInfo.attributes.sub, // filter priority = 1
            },
          };
          const response = await API.graphql({
            query: listPosts,
            variables: {filter: filter},
          });
          // const response = await API.graphql(graphqlOperation(listComments));
          //set the data
          setPosts(response.data.listPosts.items);
        } catch (e) {
          console.error(e);
        }
      };
      fetchPosts();
    });
    return unsubscribe;
  });

  return (
    <SafeAreaView>
      <View style={styles.baseCard}>
        <Text style={styles.header}>Posts</Text>
        <View style={styles.pings}>
          <FlatList
            data={posts}
            ListHeaderComponent={<></>}
            ListFooterComponent={
              <View
                style={{
                  paddingBottom: '150%',
                  // flex: 1,
                  paddingTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignContent: 'flex-end',
                }}>
                <Text style={{}}>C!ber 👽</Text>
              </View>
            }
            renderItem={({item}) => <PostsItem post={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Posts;
const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
    color: 'black',
    //#149EF0
  },
  baseCard: {
    width: '100%',
    backgroundColor: 'white',
    height: Dimensions.get('window').height - 8,
  },
  video: {
    width: 70,
    height: 70,
  },
  handle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  pings: {
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
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
    marginRight: 8,
    flex: 1,
    // backgroundColor: 'yellow',
    // justifyContent: 'center',
    justifyContent: 'flex-start',
  },
  message: {
    fontSize: 16,
    // fontWeight: '300',
    color: '#545454',
  },
});
