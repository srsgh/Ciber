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
import PingItem from '../../components/PingItem';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {listPings} from '../../graphql/queries';

const Pings = ({navigation}) => {
  const [pings, setPings] = React.useState([]);
  React.useEffect(() => {
    const fetchPings = async () => {
      //fetching fitered comments for this post
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        // Query with filters, limits, and pagination
        let filter = {
          toID: {
            eq: userInfo.attributes.sub, // filter priority = 1
          },
        };
        const response = await API.graphql({
          query: listPings,
          variables: {filter: filter},
        });
        //set the data
        // console.log(response.data.listPings.items);
        await setPings(response.data.listPings.items);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPings();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.baseCard}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ping Requests</Text>
        </View>
        <View style={styles.pings}>
          <FlatList
            data={pings}
            renderItem={({item}) => <PingItem ping={item} />}
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
