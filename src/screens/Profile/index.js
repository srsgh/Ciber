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
import Video from 'react-native-video';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Auth} from 'aws-amplify';
const Profile = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight();
  //logout service by aws: check
  const logout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.log('error siginng out', err);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
          height: Dimensions.get('window').height - tabBarHeight,
        }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>creatorname</Text>
          <TouchableOpacity onPress={logout}>
            <MaterialCommunityIcons name={'logout'} size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.resume}>
          <View style={styles.res1}>
            <View>
              <Image
                source={{
                  uri: 'https://cdn.geekwire.com/wp-content/uploads/2014/09/elonmusk.jpeg',
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.res1left}>
              <Text style={styles.res1fn}>Elon Musk</Text>
              <Text style={styles.res1job}>Web Designer UI</Text>
              <View style={styles.res1loc}>
                <Ionicons name={'ios-location'} size={13} />
                <Text style={{fontSize: 13, color: '#545454'}}>
                  New York, USA
                </Text>
              </View>
              <Button
                title="Edit"
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          </View>
          <View style={styles.res1}>
            <Text style={{fontSize: 16, color: '#545454'}}>
              Elon Reeve Musk FRS is an entrepreneur and business magnate. He is
              the founder, CEO, and Chief Engineer at SpaceX; early-stage
              investor, CEO, and Product Architect of Tesla, Inc.; founder of
              The Boring Company; and co-founder of Neuralink and OpenAI.
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
              <Text style={{fontSize: 16, color: '#545454'}}>Python, </Text>
              <Text style={{fontSize: 16, color: '#545454'}}>Python, </Text>
              <Text style={{fontSize: 16, color: '#545454'}}>Python</Text>
            </View>
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectsHeader}>PROJECTS</Text>
            <View style={styles.project}>
              <View style={styles.res1left}>
                <View style={styles.projectTitle}>
                  <Text style={styles.projectTitleName}>Space X</Text>
                  <Pressable
                    onPress={() => {
                      Linking.openURL('https://github.com/srsgh/fsd-q12.git');
                    }}>
                    <FontAwesome
                      name="external-link"
                      size={16}
                      color="#0077D6"
                    />
                  </Pressable>
                </View>
                <Text style={styles.res1job}>
                  Space Exploration Technologies Corp. is an American aerospace
                  manufacturer, space transportation services and communications
                  corporation headquartered in Hawthorne, California.
                </Text>
                <View style={styles.res1loc}>
                  <FontAwesome name={'hashtag'} size={13} />
                  <Text style={{fontSize: 13, color: '#545454'}}>
                    Aerospace
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
                    Linking.openURL('https://github.com/');
                  }}>
                  <Text style={styles.projectTitleName}>Github</Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    Linking.openURL('https://twitter.com/elonmusk');
                  }}>
                  <Text style={styles.projectTitleName}>Twitter</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    Linking.openURL('https://twitter.com/elonmusk');
                  }}>
                  <Text style={styles.projectTitleName}>LinkedIn</Text>
                </Pressable>
              </ScrollView>
            </View>
          </View>
          {/* <View style={{padding: 8}}>
            <Text style={styles.res1fn}>POSTS</Text>
            <ScrollView style={{marginLeft: 8}}>
              <FlatList
                data={posts}
                renderItem={({item}) => (
                  <View style={styles.ping}>
                    <View style={styles.pingRight}>
                      <Text style={styles.handle}>@{item.user.username}</Text>
                      <Text
                        style={styles.message}
                        // numberOfLines={2}
                        // ellipsizeMode="tail"
                      >
                        "{item.desc}"
                      </Text>
                    </View>
                  </View>
                )}
              />
            </ScrollView>
          </View> */}
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
