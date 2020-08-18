import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default MainTabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{backgroundColor: '#009387'}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color}) => (
            <Ionicons name="add" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = ({navigation}) => {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <DetailsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </DetailsStack.Navigator>
  );
};
