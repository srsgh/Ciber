import React, {useEffect} from 'react';
import {StyleSheet, Text, FlatList, View, Dimensions} from 'react-native';
import posts from '../../assets/data/posts';
import Post from '../../components/CiberPost';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';
const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();

  //first mount
  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

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
