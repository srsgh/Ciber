import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import posts from '../../assets/data/posts';

const PostsItem = props => {
  const [localPost, setLocalPost] = React.useState(props.post);
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(!localPost.status);
  const onClosePress = () => {
    setIsOpen(!isOpen);
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
          <Text style={styles.handle}>@{localPost.user.username}</Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    // padding: 8,
    color: 'black',
    //#149EF0
  },
  statsinnercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
  },
  baseCard: {
    width: '100%',
    backgroundColor: 'white',
    height: Dimensions.get('window').height - 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    // borderWidth: 2,
    // borderColor: 'black',
  },
  handle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  pings: {
    // height: Dimensions.get('window').height,
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
  //   actions: {
  //     // paddingTop: 16,
  //     // padding: 8,
  //     flexDirection: 'row',
  //     alignItems: 'center',
  // justifyContent: 'flex-end',
  //   },
});
