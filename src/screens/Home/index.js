import React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import posts from '../../assets/data/posts';
import Post from '../../components/CiberPost';

const Home = () => {
  return (
    <View>
      <FlatList data={posts} renderItem={({post}) => <Post post={post} />} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
