import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';
import Pings from '../screens/Pings';
import EditProfile from '../screens/EditProfile';
import NYProfile from '../screens/NYProfile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontiso from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Camera from '../screens/Camera';
import Publish from '../screens/Publish';
import CiberPost from '../components/CiberPost';
import PingBox from '../components/PingBox';
import Comments from '../screens/Comments';

import {KeyboardAvoidingView} from 'react-native';
const Tab = createBottomTabNavigator();

const ProfileStack = createNativeStackNavigator();
const PingsStack = createNativeStackNavigator();
const UploadStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
}
function PingsStackScreen() {
  return (
    <PingsStack.Navigator screenOptions={{headerShown: false}}>
      <PingsStack.Screen name="Pings" component={Pings} />
      <PingsStack.Screen name="NYProfile" component={NYProfile} />
    </PingsStack.Navigator>
  );
}
function UploadStackScreen() {
  return (
    <UploadStack.Navigator screenOptions={{headerShown: false}}>
      <UploadStack.Screen name="Camera" component={Camera} />
      <UploadStack.Screen name="Publish" component={Publish} />
    </UploadStack.Navigator>
  );
}
function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator screenOptions={{headerShown: false}}>
      <ExploreStack.Screen name="Home" component={Home} />
      <ExploreStack.Screen name="NYProfile" component={NYProfile} />
      <ExploreStack.Screen name="PingBox" component={PingBox} />
      <ExploreStack.Screen name="Comments" component={Comments} />
    </ExploreStack.Navigator>
  );
}
const tagNavigator = () => {
  return (
    <Tab.Navigator
      // initialRouteName={Home}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: 'black',
        },
        keyboardHidesTabBar: true,
        activeTintColor: 'white',
      }}
      screenOptions={{headerShown: false}}>
      {/* <Tab.Screen
        name="Explore"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Fontiso name={'earth'} size={24} color={color} />
          ),
        }}
      />  */}
      <Tab.Screen
        name="Explore"
        options={{
          tabBarIcon: ({color}) => (
            <Fontiso name={'earth'} size={24} color={color} />
          ),
        }}
        component={ExploreStackScreen}
      />

      {/* <Tab.Screen
        name="Pings"
        component={Pings}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'users'} size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Pings"
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'users'} size={24} color={color} />
          ),
        }}
        component={PingsStackScreen}
      />
      <Tab.Screen
        name="Upload"
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'video-camera'} size={24} color={color} />
          ),
        }}
        component={UploadStackScreen}
      />
      {/* <Tab.Screen
        name="Upload"
        component={Camera}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'video-camera'} size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name={'video-collection'} size={24} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'user'} size={24} color={color} />
          ),
        }}
      />
       */}
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'user'} size={24} color={color} />
          ),
        }}
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
};
export default tagNavigator;
