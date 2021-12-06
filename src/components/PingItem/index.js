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
const PingItem = props => {
  const [localPost, setLocalPost] = React.useState(props.post);
  const navigation = useNavigation();
  const doThis = async () => {
    try {
      const response = await navigation.navigate('NYProfile');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        // console.log('HI ' + localPost.user.username);
        doThis();
      }}>
      <View style={styles.ping}>
        <View style={{}}>
          <View style={styles.pingLeft}>
            <Image
              source={{
                uri: localPost.user.ppURI,
              }}
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.pingRight}>
          <Text style={styles.handle}>@{localPost.user.username}</Text>
          <Text style={styles.message}>"{localPost.desc}"</Text>
          {/* <View style={styles.actions}>
            <Button
              // onPress={onAcceptPress}
              onPress={() => {
                console.log(localPost.user.username);

                console.log('HEHE');
                () => props.navigation.navigate('NYProfile');
              }}
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
    //   {/* )}
    //   /> */}
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};

export default PingItem;

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
