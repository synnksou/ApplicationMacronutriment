import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    AsyncStorage
} from 'react-native';

export default class AsynchSave extends React.Component{
    constructor(props) {
        super(props);
        this. state = {
            _prenom: '',
            _nom: '',
            _age: '',
            _sexe:'',
            _poids:'',
            _taille:'',
            _brm:'',
        };
    }

    async getPrenom() {
        try {
            const value = await AsyncStorage.getItem('@MyStorage:prenom');
            this.setState({_prenom: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    async getnom() {
        try {
            const value = await AsyncStorage.getItem('@MyStorage:nom');
            this.setState({_prenom: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    async getSexe() {
        try {
            const value = await AsyncStorage.getItem('@MyStorage:sexe');
            this.setState({_prenom: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    async getTaille() {
        try {
            const value = await AsyncStorage.getItem('@MyStorage:taille');
            this.setState({_prenom: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    async getPoids() {
        try {
            const value = await AsyncStorage.getItem('@MyStorage:poids');
            this.setState({_prenom: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }
    async getBrm() {
        try {
            const value = await AsyncStorage.getItem('@MyStorage:brm');
            this.setState({_prenom: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    //___________________________SAVE_________________________
    async savePrenom(value) {
        try {
            await AsyncStorage.setItem('@MyStorage:prenom', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }
    async saveNom(value) {
        try {
            await AsyncStorage.setItem('@MyStorage:nom', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }
    async saveSexe(value) {
        try {
            await AsyncStorage.setItem('@MyStorage:sexe', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }
    async saveTaille(value) {
        try {
            await AsyncStorage.setItem('@MyStorage:taille', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }
    async savePoid(value) {
        try {
            await AsyncStorage.setItem('@MyStorage:poids', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }

    async saveBrm(value) {
        try {
            await AsyncStorage.setItem('@MyStorage:brm', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Demo AsyncStorage!
                </Text>

                <TextInput
                    style={styles.formInput}
                    placeholder="Enter key you want to save!"
                    value={this.state._prenom}
                    onChangeText={(value) => this.savePrenom(value)}
                />

                <Button
                    style={styles.formButton}
                    onPress={ ()=> (this.getPrenom())}
                    title="Get prenom"
                    color="#2196f3"
                    accessibilityLabel="Get prenom"
                />
                <Text style={styles.instructions}>
                    Stored key is = {this.state._prenom}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    formInput: {
        paddingLeft: 5,
        height: 50,
        borderWidth: 1,
        borderColor: "#555555",
    },
    formButton: {
        borderWidth: 1,
        borderColor: "#555555",
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop: 5,
    },
});

AppRegistry.registerComponent('AsyncStorageExample', () => AsyncStorageExample);
