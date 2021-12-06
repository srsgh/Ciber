import React, {useEffect} from 'react';
import {StyleSheet, Text, FlatList, View, Dimensions} from 'react-native';
import posts from '../../assets/data/posts';
import Post from '../../components/CiberPost';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries.js';
const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  //first mount
  useEffect(() => {
    console.log('Hi');
    const fetchPost = async () => {
      //fetching all posts
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        console.log(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPost();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        snapToInterval={Dimensions.get('window').height - tabBarHeight}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
