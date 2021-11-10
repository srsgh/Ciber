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
import posts from '../../assets/data/posts';
const Posts = () => {
  const [isOpen, setIsOpen] = React.useState();
  const onClosePress = () => {
    setIsOpen(!isOpen);
  };
  return (
    <SafeAreaView>
      <View style={styles.baseCard}>
        <Text style={styles.header}>Posts</Text>
        <View style={styles.pings}>
          <FlatList
            data={posts}
            renderItem={({item}) => (
              <View style={styles.ping}>
                <View style={styles.pingRight}>
                  <Text style={styles.handle}>@{item.user.username}</Text>

                  <Text style={styles.message}>"{item.desc}"</Text>
                  <View>
                    <Button
                      onPress={onClosePress}
                      title={isOpen ? 'CLOSE' : 'CLOSED'}
                      color="black"
                    />
                  </View>
                </View>
              </View>
            )}
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
