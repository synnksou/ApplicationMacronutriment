import React from 'react';
import {createAppContainer, createSwitchNavigator,createNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';



export default createAppContainer(
    createSwitchNavigator
(
    {
  Main: MainTabNavigator,
}));
