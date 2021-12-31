import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../../graphql/queries';
const PingItem = props => {
  const [localPing, setLocalPing] = React.useState(props.ping);
  const [localPinger, setLocalPinger] = React.useState([]);
  const navigation = useNavigation();
  const doThis = async () => {
    try {
      const response = await navigation.navigate('NYProfile', {
        userID: localPing.pingerID,
      });
    } catch (e) {
      console.error(e);
    }
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchUser = async () => {
        try {
          const response = await API.graphql(
            graphqlOperation(getUser, {id: localPing.pingerID}),
          );
          //set the data locally
          await setLocalPinger(response.data.getUser);
        } catch (e) {
          console.error(e);
        }
      };
      fetchUser();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <TouchableOpacity
      onPress={() => {
        doThis();
      }}>
      <View style={styles.ping}>
        <View style={{}}>
          <View style={styles.pingLeft}>
            <Image
              source={{
                uri: localPinger.ppURI,
              }}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.pingRight}>
          <Text style={styles.handle}>@{localPinger.username}</Text>
          <Text style={styles.message}>"{localPing.pingMessage}"</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    justifyContent: 'flex-start',
  },
  message: {
    fontSize: 16,
    // fontWeight: '300',
    color: '#545454',
  },
});
