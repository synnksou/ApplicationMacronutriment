import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {LineChart} from "react-native-chart-kit";
import Progress from "../components/Progress";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Progression ',
    headerStyle:{
      backgroundColor: '#00B0FF',
    },
    titleColor:'#ffffff',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    return (
          <Progress/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
