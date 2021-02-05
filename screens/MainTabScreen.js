import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Icon  from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ExchangeScreen from './ExchangeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const ExchangeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Exchange"
            component={ExchangeStackScreen}
            options={{
              tabBarLabel: 'Exchange',
              tabBarColor: '#1f65ff',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-bookmark" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: '#694fad',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsStackScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarColor: '#d02860',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-settings" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor='#009387' 
            onPress={() => {
              navigation.openDrawer();
              }}
           >
          </Icon.Button>
        )
      }} />
    </HomeStack.Navigator>
);


const ExchangeStackScreen = ({ navigation }) => (
    <ExchangeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#1f65ff'
        },
        headerTintColor: '#fff',
      }}>
      <ExchangeStack.Screen name="Exchange" component={ExchangeScreen} options={{
        title: 'Exchange Item',
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor='#1f65ff' 
            onPress={() => {
              navigation.openDrawer();
              }}
           >
          </Icon.Button>
        )
      }} />
    </ExchangeStack.Navigator>
);
const ProfileStackScreen = ({ navigation }) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#694fad'
        },
        headerTintColor: '#fff',
      }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
        title: 'Profile',
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor='#694fad' 
            onPress={() => {
              navigation.openDrawer();
              }}
           >
          </Icon.Button>
        )
      }} />
    </ProfileStack.Navigator>
);

const SettingsStackScreen = ({ navigation }) => (
    <SettingsStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#d02860'
        },
        headerTintColor: '#fff',
      }}>
      <SettingsStack.Screen name="Setting" component={SettingScreen} options={{
        title: 'Settings',
        headerLeft: () => (
          <Icon.Button 
            name="ios-menu" 
            size={25} 
            backgroundColor='#d02860' 
            onPress={() => {
              navigation.openDrawer();
              }}
           >
          </Icon.Button>
        )
      }} />
    </SettingsStack.Navigator>
);