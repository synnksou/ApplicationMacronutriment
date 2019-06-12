import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


export default class HomeScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Accueil',
    headerStyle:{
      backgroundColor: '#00B0FF',
    },
    titleColor:'#ffffff',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Image
                  source={require('../assets/images/icons8-musculation-50.png')
                  }
                  style={styles.welcomeImage}
              />
            </View>
            <View style={styles.getStartedContainer}>
              <Text style={styles.getStartedText}>Bienvenue sur Musculator</Text>
              <Text style={styles.getStartedText}>Cette application pour but de vous aidez et atteindre votre objectif</Text>
              <Text style={styles.getStartedText}>Pour commencer, rentrez vos informations en appuyant sur 'Enregistrer Information', pour mieux comprendre appyer sur Comment ça marche ? </Text>
            </View>
            <View style={styles.buttonContents}>
              <Button color={'#ffffff'} style={styles.buttonOn} title={'Comment-ça marche ?'}
                      onPress={() => this.props.navigation.push('HowScreen')}/>
            </View>
            <View style={styles.buttonContents}>
              <Button color={'#ffffff'} style={styles.buttonOn} title={'Enregistrer Information'}
                      onPress={() => this.props.navigation.push('Info')}/>
            </View>
            <View style={styles.buttonContents}>
              <Button color={'#ffffff'} style={styles.buttonOn} title={'Voir mes Informations'}
                      onPress={() => this.props.navigation.push('ViewInfo')}/>
            </View>
            <View style={styles.buttonContents}>
              <Button color={'#ffffff'} style={styles.buttonOn} title={'Consommation quotidienne'}
                      onPress={() => this.props.navigation.push('Conso')}/>
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  buttonContents: {
    backgroundColor : '#00B0FF',
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30
  },
  buttonOn:{
    color:'#ffffff',
    padding: 20,
  }
});

/*
export default createStackNavigator({
      Home:{
        screen:HomeScreen2,
        navigationOptions: ()=>{
          return ({title:'Accueil',})
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

*/
