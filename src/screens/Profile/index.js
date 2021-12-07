import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  SafeAreaView,
  TextInput,
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';
import posts from '../../assets/data/posts';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {getUser} from '../../graphql/queries';

const Profile = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [localUser, setLocalUser] = React.useState([]);
  //logout service by aws: check
  const logout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log('error signing out', err);
    }
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        console.log(userInfo);
        const response = await API.graphql(
          graphqlOperation(getUser, {id: userInfo.attributes.sub}),
        );
        //set the data locally
        setLocalUser(response.data.getUser);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: Dimensions.get('window').height - tabBarHeight,
        }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{localUser.username}</Text>
          <TouchableOpacity onPress={logout}>
            <MaterialCommunityIcons name={'logout'} size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.resume}>
          <View style={styles.res1}>
            <View>
              <Image
                source={{
                  uri: localUser.ppURI,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.res1left}>
              <Text style={styles.res1fn}>
                {localUser.fullname ? localUser.fullname : localUser.username}
              </Text>
              <Text style={styles.res1job}>
                {localUser.job ? localUser.job : 'Profession'}
              </Text>
              <View style={styles.res1loc}>
                <Ionicons name={'ios-location'} size={13} />
                <Text style={{fontSize: 13, color: '#545454'}}>
                  {localUser.location
                    ? localUser.location
                    : 'Location City, State'}
                </Text>
              </View>
              <Button
                title="Edit"
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}
              />
            </View>
          </View>
          <View style={styles.res1}>
            <Text style={{fontSize: 16, color: '#545454'}}>
              {localUser.bio}
            </Text>
          </View>
          {/* <View style={{padding: 8}}>
            <View>
              <Button title="Message" />
            </View>
          </View> */}
          <View style={{padding: 8}}>
            <View>
              <Text style={styles.res1fn}>SKILLS</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* <Fontisto name={'python'} size={16} /> */}
              <Text style={{fontSize: 16, color: '#545454'}}>
                {localUser.skills}
              </Text>
            </View>
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectsHeader}>PROJECTS</Text>
            <View style={styles.project}>
              <View style={styles.res1left}>
                <View style={styles.projectTitle}>
                  <Text style={styles.projectTitleName}>Ciber X</Text>
                  <Pressable
                    onPress={() => {
                      Linking.openURL('https://github.com/srsgh/ciber.git');
                    }}>
                    <FontAwesome
                      name="external-link"
                      size={16}
                      color="#0077D6"
                    />
                  </Pressable>
                </View>
                <Text style={styles.res1job}>
                  Ciber is a react native application built for easily finding
                  creators with similar interests to collaborate on your next
                  big hackathon. Finding team mates and community issue
                  resolutions are now easy.
                </Text>
                <View style={styles.res1loc}>
                  <FontAwesome name={'hashtag'} size={13} />
                  <Text style={{fontSize: 13, color: '#545454'}}>
                    ReactNative
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectsHeader}>SOCIALS</Text>
            <View style={styles.project}>
              <ScrollView horizontal={true} style={{marginLeft: 8}}>
                <Pressable
                  onPress={() => {
                    Linking.openURL(
                      'https://mail.google.com/mail/?view=cm&fs=1&to=' +
                        `${localUser.email}` +
                        '&su=SUBJECT&body=BODY',
                    );
                  }}>
                  <Text style={styles.projectTitleName}>
                    {localUser.skills ? localUser.skills : localUser.email}
                  </Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
  // header: {
  //   fontWeight: 'bold',
  //   fontSize: 24,
  //   padding: 8,
  //   color: 'black',
  // },
  image: {
    width: 100,
    height: 100,
    borderRadius: 70,
    // borderWidth: 2,
    // borderColor: 'black',
  },
  handle: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  resume: {
    paddingTop: 8,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  res1: {
    padding: 8,
    flexDirection: 'row',
    // borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
  },
  res1left: {marginLeft: 8},
  res1fn: {fontSize: 16, fontWeight: '700', color: 'black'},
  res1job: {fontSize: 16, color: 'black'},
  res1loc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  res1left: {marginLeft: 8},
  res1job: {fontSize: 16, color: 'black'},
  res1loc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  projects: {padding: 8},
  project: {},
  projectsHeader: {fontSize: 16, fontWeight: '700', color: 'black'},
  projectTitle: {flexDirection: 'row', alignItems: 'center'},
  projectTitleName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0077D6',
    marginRight: 5,
  },
  social: {flexDirection: 'row', alignItems: 'center', marginRight: 10},
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

export default Profile;
