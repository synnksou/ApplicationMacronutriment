import React from 'react';
import { createStackNavigator,createAppContainer,createNavigator} from 'react-navigation';
import setInformationScreen from "../screens/setInformationScreen";
import HomeScreen2 from "../screens/HomeScreen2";
import ViewInfoScreen from "../screens/ViewInfoScreen";

export default createStackNavigator({
        Home:{
            screen:HomeScreen2,
            navigationOptions: ()=>{
                return ({title:'Accueil'})
            }
        },
        Info:{
            screen:setInformationScreen,
            navigationOptions: () => {
                return ({title: 'Screen SetInfo'});
            }
        },
        ViewInfo:ViewInfoScreen,
    },{
        initialRouteName:'Home',
    }
);
