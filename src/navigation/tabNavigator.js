import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const tagNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: 'black',
        },
        activeTintColor: 'white',
      }}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'inbox'} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pings"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'users'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'home'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Upload"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'video-camera'} size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name={'user'} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default tagNavigator;
