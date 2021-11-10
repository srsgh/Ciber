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

const Pings = () => {
  //   const [isChecked, setIsChecked] = React.useState(false);
  //   const onAcceptPress = () => {
  //     setIsChecked(!isChecked);
  //   };
  //   const [isRejected, setIsRejected] = React.useState(false);
  //   const onRejectPress = () => {
  //     setIsRejected(!isRejected);
  //   };
  return (
    <SafeAreaView>
      <View style={styles.baseCard}>
        <Text style={styles.header}>Ping Requests</Text>
        <View style={styles.pings}>
          <FlatList
            data={posts}
            renderItem={({item}) => (
              <TouchableOpacity activeOpacity="0.1">
                <View style={styles.ping}>
                  <View style={{}}>
                    <View style={styles.pingLeft}>
                      <Image
                        source={{
                          uri: item.user.ppURI,
                        }}
                        style={styles.image}
                      />
                    </View>
                  </View>

                  <View style={styles.pingRight}>
                    <Text style={styles.handle}>@{item.user.username}</Text>

                    <Text
                      style={styles.message}
                      // numberOfLines={2}
                      // ellipsizeMode="tail"
                    >
                      "{item.desc}"
                    </Text>
                    {/* <View style={styles.actions}>
                      <Button
                        // onPress={onAcceptPress}
                        // title={isChecked ? 'ACCEPTED' : 'ACCEPT'}
                        title="ACCEPT"
                        color="black"
                      />
                      <Button
                        // onPress={onRejectPress}
                        // title={isRejected ? 'REJECTED' : 'REJECT'}
                        // color="black"
                        title="REJECT"
                      />
                    </View> */}
                    {/*  <Text>{item.likes}</Text>
                    <Text>{item.comments}</Text> */}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Pings;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
    color: '#149EF0',
  },
  baseCard: {
    width: '100%',
    backgroundColor: 'white',
    height: Dimensions.get('window').height - 50,
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
    fontWeight: '600',
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
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    fontWeight: '300',
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
