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
import {useRoute} from '@react-navigation/native';
import {listComments} from '../../graphql/queries';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import {updateUser} from '../../graphql/mutations'; //operation for mutation
import {getUser} from '../../graphql/queries';
const EditProfile = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  const route = useRoute();
  const user = route.params.user;
  const [localUser, setLocalUser] = React.useState({
    id: user.id,
    username: user.username,
    email: user.email,
    ppURI: user.ppURI,
    location: user.location,
    bio: user.bio,
    skills: user.skills,
  }); //to save locally user edits

  ////this is the saving function UNDER CONSTRUCTION
  const onSave = async () => {
    try {
      console.log(localUser);
      // console.log(localUser.posts);
      const response = await API.graphql({
        query: updateUser,
        variables: {input: localUser},
      });
      //go back
      navigation.navigate('Profile', {
        updatedUser: await API.graphql(
          graphqlOperation(getUser, {id: localUser.userID}),
        ),
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
          // height: Dimensions.get('window').height - tabBarHeight,
        }}>
        <Text style={styles.header}>{localUser.username}</Text>
        <Button
          title="Back without saving changes"
          color="black"
          onPress={() => navigation.navigate('Profile')}
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
              <Text style={styles.res1fn}>{localUser.username}</Text>
              <TextInput
                style={styles.res1job}
                // value={localUser.job}
                placeholder="Profession"
                // onChangeText={text => {
                //   setLocalUser({
                //     ...localUser,
                //     job: text,
                //   });
                // }}
              />
              <View style={styles.res1loc}>
                <Ionicons name={'ios-location'} size={13} />
                <TextInput
                  style={{fontSize: 13, color: '#545454'}}
                  placeholder="Location City, State"
                  value={localUser.location}
                  onChangeText={text => {
                    setLocalUser({
                      ...localUser,
                      location: text,
                    });
                  }}
                />
              </View>
              <Button title="Save" onPress={onSave} />
            </View>
          </View>
          <View style={{padding: 8}}>
            <Text style={styles.res1fn}>BIO</Text>
          </View>
          <View style={styles.res1}>
            <TextInput
              placeholder="Bio"
              style={{fontSize: 16, color: '#545454'}}
              value={localUser.bio}
              onChangeText={text => {
                setLocalUser({
                  ...localUser,
                  bio: text,
                });
                // console.log(localUser);
              }}
            />
          </View>
          <View style={{padding: 8}}>
            <View>
              <Text style={styles.res1fn}>SKILLS</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                placeholder="Skillset"
                value={localUser.skills}
                onChangeText={text => {
                  setLocalUser({
                    ...localUser,
                    skills: text,
                  });
                }}
              />
            </View>
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectsHeader}>PROJECTS</Text>
            <View style={styles.project}>
              <View style={styles.res1left}>
                <View style={styles.projectTitle}>
                  <TextInput
                    maxLength={20}
                    placeholder="Directory Name"
                    style={styles.projectTitleName}
                    // value={localUser.dirName}
                    // onChange={text => {
                    //   setLocalUser({...localUser, dirName: text});
                    // }}
                  />
                </View>
                <View style={styles.res1loc}>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(`${localUser.dirLink}`);
                    }}>
                    <FontAwesome
                      name="external-link"
                      size={16}
                      color="#0077D6"
                    />
                  </Pressable>
                  <TextInput
                    style={{marginLeft: 5, fontSize: 13, color: '#545454'}}
                    placeholder="Directory Link"
                    // value={localUser.dirLink}
                    // onChangeText={text => {
                    //   setLocalUser({...localUser, dirLink: text});
                    // }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectsHeader}>SOCIALS</Text>
            <View style={styles.project}>
              <View style={styles.res1left}>
                <View style={styles.projectTitle}>
                  <TextInput
                    maxLength={30}
                    placeholder="Social Site's Name"
                    style={styles.projectTitleName}
                    // value={localUser.ssName}
                    // onChange={text => {
                    //   setLocalUser({...localUser, ssName: text});
                    // }}
                  />
                </View>
                <View style={styles.res1loc}>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(`${localUser.ssLink}`);
                    }}>
                    <FontAwesome
                      name="external-link"
                      size={16}
                      color="#0077D6"
                    />
                  </Pressable>
                  <TextInput
                    style={{marginLeft: 5, fontSize: 13, color: '#545454'}}
                    placeholder="Messenger Link"
                    // value={localUser.ssLink}
                    // onChangeText={text => {
                    //   setLocalUser({...localUser, ssLink: text});
                    // }}
                  />
                </View>
              </View>
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

export default EditProfile;
