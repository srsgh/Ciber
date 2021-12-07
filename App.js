import React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Home from './src/screens/Home/index.js';
import RootNavigation from './src/navigation/index.js';
import {withAuthenticator} from 'aws-amplify-react-native';

import {Auth, API, graphqlOperation} from 'aws-amplify';
import {createUser} from './src/graphql/mutations'; //operation for mutation
import {getUser} from './src/graphql/queries'; //operation for mutation
const App = () => {
  //user presence|creation in DynamoDB
  React.useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      // console.log(userInfo);
      const getUserResponse = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );
      if (getUserResponse.data.getUser) {
        console.log('Welcome back.');
        return;
      }
      //new user
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        ppURI:
          'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png',
      };
      // console.log(newUser);
      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };

    fetchUser();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      {/* <Home /> */}
      <RootNavigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export default withAuthenticator(App);
