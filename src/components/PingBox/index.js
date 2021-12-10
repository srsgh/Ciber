import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TextInput,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createPing} from '../../graphql/mutations';
import Toast from 'react-native-simple-toast';

const PingBox = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [pingMessage, setPingMessage] = React.useState('');
  const route = useRoute();
  const post = route.params.post;
  //create post in db API
  const onConnect = async () => {
    try {
      if (!pingMessage.trim()) {
        Toast.show('Add a message to your connect request.', Toast.SHORT, [
          'UIAlertController',
        ]);
        return;
      }
      const userInfo = await Auth.currentAuthenticatedUser();
      const newPing = {
        postID: post.id,
        pingMessage: pingMessage.trim(),
        pingerID: userInfo.attributes.sub,
      };
      const response = await API.graphql(
        graphqlOperation(createPing, {input: newPing}),
      );
      //go back
      Toast.show('Connection request sent!');
      navigation.navigate('Home');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: Dimensions.get('window').height - tabBarHeight,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'white',
          }}>
          <Text style={styles.header}>Connect</Text>
          <Button
            title="Go Back "
            color="black"
            onPress={() => navigation.navigate('Home')}
          />
          <View style={styles.description}>
            <View style={styles.descs}>
              <Text style={styles.descsHeader}>
                ADD A MESSAGE TO YOUR CONNECT REQUEST
              </Text>
              <ScrollView>
                <TextInput
                  style={styles.desc}
                  value={pingMessage}
                  onChangeText={setPingMessage}
                  numberOfLines={5}
                  multiline
                  placeholder="Type your message here..."
                />
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={{}}>
          <Button title="Connect" onPress={onConnect} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
    color: 'black',
  },

  description: {
    margin: 8,
  },
  desc: {
    padding: 8,
    marginTop: 5,
    fontSize: 16,
    color: 'black',
    backgroundColor: '#eeeeee',
  },
  res1loc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descs: {padding: 8},
  descsHeader: {fontSize: 16, fontWeight: '700', color: 'black'},
  projectTitle: {flexDirection: 'row', alignItems: 'center'},
  projectTitleName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0077D6',
    marginRight: 5,
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
  text: {
    fontSize: 16,
    fontWeight: '300',
    color: '#545454',
  },
});

export default PingBox;
