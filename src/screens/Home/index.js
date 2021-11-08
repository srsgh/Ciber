import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Post from '../../components/CiberPost';
const post = {
  id: 'p1',
  videoURI:
    'https://player.vimeo.com/external/500620909.sd.mp4?s=fedc9a991e20c92108928e333e13e5dd9eda5cc5&profile_id=165&oauth2_token_id=57447761',
  user: {
    id: 'u1',
    username: 'elonmusk',
    ppURI: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
  },
  desc: 'some random desc',
  likes: 143,
  comments: 100,
};
const Home = () => {
  return (
    <View>
      <Post post={post} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
