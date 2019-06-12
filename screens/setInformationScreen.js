import React from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Alert,
    AsyncStorage,
} from 'react-native';
import Personne from "./Personne";

export default class SetInformationScreen extends React.Component{

    _state = {
        _prenom: '',
        _nom: '',
        _age: '',
        _sexe:'',
        _poids:'',
        _taille:'',
        _brm:'',
        _regime:''
    };

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
            this.setState({_brm: value});
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

    async saveRegime(value) {
        try {
            await AsyncStorage.setItem('@MyStorage:regime', value);
        } catch (error) {
            console.log("Error saving data" + error);
        }
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.textLabel}>
                    <Text>
                        Prénom :
                    </Text>
                    </View>
                    <View style={styles.textinput}>
                    <TextInput
                        placeHolder={"Prenom"}
                        onChangeText={(value) => this.setState({_prenom : value})}
                        color={"#fffff"}
                    >
                    </TextInput>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                             Sexe (M ou F) :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <TextInput placeHolder={"Poids"}
                                   onChangeText={(value) => this.setState({_sexe : value})}
                                   color={"#fffff"}>

                        </TextInput>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Taille (cm) :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <TextInput placeHolder={"Taille"}
                                   onChangeText={(value) => this.setState({_taille : value})}
                                   color={"#fffff"}>
                        </TextInput>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.textLabel}>
                        <Text>
                            Poids (Kg) :
                        </Text>
                    </View>
                    <View style={styles.textinput}>
                        <TextInput placeHolder={"Poids"}
                                   onChangeText={(value) => this.setState({_poids : value})}
                                   color={"#fffff"}>

                        </TextInput>
                    </View>
                </View>
                <View>
                    <View>
                        <View style={styles.brm}>
                            <Text>
                            Etes vous Sportif ?

                            </Text>
                        </View>
                        <View>
                            <Text style={styles.brm}>
                                1 pour sédentaire  |
                                1,2 Tres faible activité |
                                1,4 activité légère |
                                1,6 activité modérée |
                                1,8 haute activité   |
                                2 activité extrême
                            </Text>
                        </View>
                        <View style={styles.textinput}>
                            <TextInput placeHolder={"Brm"}
                                       onChangeText={(value) => this.setState({_brm : value})}
                                       color={"#fffff"}>

                            </TextInput>
                        </View>
                    </View>
                    <View>
                        <View style={styles.brm}>
                            <Text>
                                Regime souhaité : (Perte de poids : P) ou (Prise de Masse : A) ou (Stable : S)
                            </Text>
                        </View>
                        <View style={styles.textinput}>
                            <TextInput
                                placeHolder={"Nom"}
                                onChangeText={(value) => this.setState({_regime : value})}
                                color={"#fffff"}>

                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.buttonContents}>
                <Button
                    color={'#ffffff'}
                    title="Confirmer"
                    onPress={() =>
                    {
                        if(!(this._state._prenom.localeCompare(''))){
                            Alert.alert("Champs vide","Le champs PRENOM est vide, veuiller le remplir.");
                            return
                        }
                        if(!(this._state._regime.localeCompare(''))){
                            Alert.alert("Champs vide","Le champs Regime est vide, veuiller le rempli.");
                            return;
                        }

                        if(!(this._state._sexe.localeCompare(''))){
                            Alert.alert("Champs vide","Le champs Sexe est vide, veuiller le remplir.");
                            return;
                        }
                        if(!(this._state._poids.localeCompare(''))){
                            Alert.alert("Champs vide","Le champs POIDS est vide, veuiller le remplir.");
                            return;
                        }
                        if(!(this._state._taille.localeCompare(''))){
                            Alert.alert("Champs vide","Le champs TAILLES est vide, veuiller le remplir.");
                            return;
                        }
                        if(!(Number.isInteger(Number.parseInt(this._state._taille,10))) ){
                            Alert.alert("Erreur d'entrée","La taille doit etre un Entier.");
                            return;
                        }
                        if(!(Number.isInteger(Number.parseInt(this._state._poids,10))) ){
                            Alert.alert("Erreur d'entrée","Le poids doit etre un Réel.");
                            return;
                        }

                        this.savePrenom(this.state._prenom);
                        this.saveNom(this.state._nom);
                        this.savePoid(this.state._poids);
                        this.saveTaille(this.state._taille);
                        this.saveSexe(this.state._sexe);
                        this.saveBrm(this.state._brm);
                        this.saveRegime(this.state._regime);

                        console.log("prenom : " + this._state._prenom + " brm : " + this._state._brm + " Sexe : " +this._state._sexe + " Poid :" + this._state._poids +" Taille :" + this._state._taille);
                        Alert.alert("Information Enregistrer","Vos informations on était enregistrées avec succes, vous pourrez les retrouves dans 'Mes informations' ");
                        this.props.navigation.pop();


                    }}/>
                    </View>
                </View>

            </ScrollView>
        )

    }

    get personne() {
        return this._personne;
    }

    set personne(value) {
        this._personne = value;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
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
    picker:{
        margin: 10,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    brm:{
        alignItems : 'center',
        justifyContent: 'center ',
        margin:10,
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

