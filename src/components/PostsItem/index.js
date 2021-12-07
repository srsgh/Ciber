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
import posts from '../../assets/data/posts';
// import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const PostsItem = props => {
  // const tabBarHeight = useBottomTabBarHeight();
  const [localPost, setLocalPost] = React.useState(props.post);
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(!localPost.status);
  const onClosePress = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.ping}>
      <View style={styles.pingRight}>
        <Text style={styles.handle}>@{localPost.user.username}</Text>
        <Text style={styles.message}>"{localPost.desc}"</Text>
        <View>
          <Button
            onPress={onClosePress}
            title={isOpen ? 'CLOSE' : 'CLOSED'}
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
