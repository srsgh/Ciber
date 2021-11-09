import React from 'react';
import {StyleSheet, Text, FlatList, View, Dimensions} from 'react-native';
import posts from '../../assets/data/posts';
import Post from '../../components/CiberPost';

const Home = () => {
  console.warn('Hi');
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
