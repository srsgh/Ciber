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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import posts from '../../assets/data/posts';

const Pings = () => {
  return (
    <SafeAreaView>
      <View style={styles.baseCard}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ping Requests</Text>
          <TouchableOpacity>
            <FontAwesome name={'inbox'} size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.pings}>
          <FlatList
            data={posts}
            renderItem={({item}) => (
              <TouchableOpacity>
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
