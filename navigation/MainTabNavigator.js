import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createAppContainer} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen2 from "../screens/HomeScreen2";
import setInformationScreen from "../screens/setInformationScreen";
import ViewInfoScreen from "../screens/ViewInfoScreen";
import HowScrenn from "../screens/HowScrenn";
import ConsoScreen from "../screens/ConsoScreen";

const HomeStack = createStackNavigator({
  Accueil:{
    screen:HomeScreen2,
    navigationOptions: ()=>{
      return ({title:'Accueil',
        headerStyle:{
          backgroundColor: '#00B0FF',
        },
        titleColor:'#ffffff',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      })
    }
  },
  Info:{
    screen:setInformationScreen,
    navigationOptions: () => {
      return ({
        title: 'Vos Informations',
        headerStyle: {
          backgroundColor: '#00B0FF',
        },
        titleColor: '#ffffff',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      })
    }
  },
  ViewInfo:{
    screen:ViewInfoScreen,
    navigationOptions: () => {
      return ({
        title: 'Vos Informations',
        headerStyle: {
          backgroundColor: '#00B0FF',
        },
        titleColor: '#ffffff',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      })
    }
  },
  HowScreen:{
    screen:HowScrenn,
    navigationOptions: () => {
    return ({
              title: 'Comment-ça marche ?',
              headerStyle: {
                backgroundColor: '#00B0FF',
              },
              titleColor: '#ffffff',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
            })
  }
  },
  Conso:{
    screen:ConsoScreen,
    navigationOptions: () => {
      return ({
        title: 'Consommation',
        headerStyle: {
          backgroundColor: '#00B0FF',
        },
        titleColor: '#ffffff',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      })
    }
  }
},{
  initialRouteName:'Accueil',
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
     /* name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-ios-home'
      }

      */
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Progression',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trending-up' : 'md-trending-up'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Paramètre: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Paramètre',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});


