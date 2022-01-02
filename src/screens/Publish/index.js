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
  KeyboardAvoidingView,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useRoute} from '@react-navigation/native';
import {v4 as uuidv4} from 'uuid'; //To create a random UUID...
import {Storage, API, graphqlOperation, Auth} from 'aws-amplify';
import Toast from 'react-native-simple-toast';
import {createPost} from '../../graphql/mutations';
const Publish = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [desc, setDesc] = React.useState('');
  const [videoKey, setVideoKey] = React.useState(null);
  const route = useRoute();
  //upload to s3 in aws
  const uploading = async imagePath => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      //Create a UUID
      const filename = `${uuidv4()}.mp4`;
      const s3Response = await Storage.put(filename, blob);
      setVideoKey(s3Response.key);
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    uploading(route.params.videoUri);
  }, []);

  //create post in db API
  const onPublish = async () => {
    if (!desc.trim()) {
      Toast.show('Please add a comment first.', Toast.SHORT, [
        'UIAlertController',
      ]);
      return;
    }
    if (!videoKey) {
      // console.warn('Uploading in process, Breathe...');
      Toast.show('Uploading in process, Breathe...', Toast.SHORT, [
        'UIAlertController',
      ]);
      return;
    }
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const newPost = {
        videoURI: videoKey, /////not exactly right
        desc: desc,
        status: false,
        userID: userInfo.attributes.sub,
      };
      const response = await API.graphql(
        graphqlOperation(createPost, {input: newPost}),
      );
      //go back
      Toast.show('Upload successful.', Toast.SHORT, ['UIAlertController']);
      navigation.navigate('Camera');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <KeyboardAvoidingView>
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
          <Text style={styles.header}>Publish Post</Text>
          <Button
            title="Go Back "
            color="black"
            onPress={() => navigation.navigate('Camera')}
          />
          <View style={styles.description}>
            <View style={styles.descs}>
              <Text style={styles.descsHeader}>ADD DESCRIPTION</Text>
              <View>
                <TextInput
                  style={styles.desc}
                  value={desc}
                  placeholder="Enter a short description for this video."
                  onChangeText={setDesc}
                  numberOfLines={5}
                  multiline
                />
                <View style={{}}>
                  <Button title="Publish" onPress={onPublish} />
                </View>
                <View
                  style={{
                    paddingBottom: 60,
                    // flex: 1,
                    paddingTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}>
                  <Text style={{}}>C!ber 👽</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    minHeight: '45%',
    maxHeight: '45%',
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

export default Publish;
