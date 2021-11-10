import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.profileCard}>
      <Text>PROFILE SCREEN</Text>
      <View
        style={{
          height: '15%',
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileCard: {
    width: '100%',
    backgroundColor: 'white',
    height: Dimensions.get('window').height - 50,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    // marginBottom: 8,
  },
});
