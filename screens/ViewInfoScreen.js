import React from 'react'
import {AsyncStorage, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import setInformationScreen from "./setInformationScreen";




export default class ViewInfoScreen extends React.Component{

    state = {
        _prenom: '',
        _nom: '',
        _age: '',
        _sexe:'',
        _poids:'',
        _taille:'',
        _brm:'',
        _regime:'',
    };

    componentDidMount(){
        AsyncStorage.getItem('@MyStorage:brm', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({_brm:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:prenom', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({_prenom:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:nom', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({_nom:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:taille', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({_taille:value});
            }
        }); AsyncStorage.getItem('@MyStorage:poids', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({_poids:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:sexe', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({_sexe:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:regime', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({_regime:value});
            }
        });


    }


    render() {

        return(
            <ScrollView>
                <View>
                    <Text style={styles.textTitle}>
                        Mes Informations
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Prénom :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <Text>
                            {this.state._prenom}
                        </Text>
                    </View>
                </View>


                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Sexe :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <Text>
                            {this.state._sexe}
                        </Text>
                        </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Taille (cm) :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <Text>
                            {this.state._taille}
                        </Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Poids (Kg) :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                    <Text>
                        {this.state._poids}
                    </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Brm :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <Text >
                            {this.state._brm}
                        </Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Régime :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <Text >
                            {this.state._regime}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'

    },
    textinput: {
        flex:1,
        backgroundColor: '#CFCFCF',
        borderRadius:15,
        padding: 10,
        margin: 10,
    },
    textLabel:{
        fontSize:16,
        fontFamily:'avenir-light',
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 10,
    },
    textTitle:{
        fontSize:20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }

});



