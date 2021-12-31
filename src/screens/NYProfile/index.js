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
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {API, graphqlOperation} from 'aws-amplify';
import {getUser} from '../../graphql/queries';
import {useRoute} from '@react-navigation/native';
const NYProfile = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const [localUser, setLocalUser] = React.useState([]);
  const route = useRoute();
  const userID = route.params.userID;
  console.log(userID);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchUser = async () => {
        try {
          const response = await API.graphql(
            graphqlOperation(getUser, {id: userID}),
          );
          //set the data locally
          setLocalUser(response.data.getUser);
        } catch (e) {
          console.error(e);
        }
      };
      fetchUser();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: Dimensions.get('window').height - tabBarHeight,
        }}>
        <Text style={styles.header}>{localUser.username}</Text>
        <Button
          title="Go Back "
          color="black"
          onPress={() => navigation.popToTop()}
        />
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
              <Text style={styles.res1job}>{localUser.job}</Text>
              <View style={styles.res1loc}>
                {localUser.location ? (
                  <>
                    <Ionicons name={'ios-location'} size={13} />
                    <Text style={{fontSize: 13, color: '#545454'}}>
                      {localUser.location}
                    </Text>
                  </>
                ) : (
                  <View style={{height: 13}}></View>
                )}
              </View>
            </View>
          </View>
          <View style={styles.res1}>
            <Text style={{fontSize: 16, color: '#545454'}}>
              {localUser.bio}
            </Text>
          </View>
          <View style={{padding: 8}}></View>
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
            {localUser.dirName ? (
              <View style={styles.project}>
                <View style={styles.res1left}>
                  <View style={styles.projectTitle}>
                    <Text>{localUser.dirName}</Text>
                    <Pressable
                      style={{paddingLeft: 8}}
                      onPress={() => {
                        Linking.openURL(`${localUser.dirLink}`);
                      }}>
                      <FontAwesome
                        name="external-link"
                        size={16}
                        color="#0077D6"
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectsHeader}>SOCIALS</Text>
            <View style={styles.project}>
              <ScrollView horizontal={true} style={{marginLeft: 8}}>
                <Pressable
                  onPress={() => {
                    let to =
                      'https://mail.google.com/mail/?view=cm&fs=1&to=' +
                      `${localUser.email}` +
                      '&su=SUBJECT&body=BODY';
                    Linking.openURL(to);
                  }}>
                  <Text style={styles.projectTitleName}>Gmail</Text>
                </Pressable>
                {localUser.ssName ? (
                  <Pressable
                    onPress={() => {
                      Linking.openURL(`${localUser.ssLink}`);
                    }}>
                    <Text style={styles.projectTitleName}>
                      {localUser.ssName}
                    </Text>
                  </Pressable>
                ) : (
                  <></>
                )}
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
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
    color: 'black',
  },
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

export default NYProfile;
