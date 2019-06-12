import React from 'react'
import {
    AsyncStorage, Platform,
    ScrollView, StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native'
import {PieChart} from 'react-native-chart-kit'




export default class ConsoScreen extends React.Component{
    static navigationOptions = {
        title: 'Consomation',
        headerStyle:{
            backgroundColor: '#00B0FF',
        },
        titleColor:'#ffffff',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    data = [
        { name: 'Glucide', nb:256, color: '#F00', legendFontColor: '#F00', legendFontSize: 15 },
        { name: 'Proteine', nb: 96, color: '#4250f4', legendFontColor: '#4250f4', legendFontSize: 15 },
        { name: 'Lipide', nb: 341, color: '#04e578', legendFontColor: '#04e578', legendFontSize: 15 }
    ];



    state={
        regime:'',
        brm:'',
        poids:0,
        taille:0,
        lipide:0,
        glucide:0,
        protaine:0,
        sexe:'',
        };


    componentDidMount() {
        AsyncStorage.getItem('@MyStorage:brm', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({brm:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:taille', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({taille:value});
            }
        }); AsyncStorage.getItem('@MyStorage:poids', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({poids:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:regime', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({regime:value});
            }
        });
        AsyncStorage.getItem('@MyStorage:sexe', (error,value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({sexe:value});
            }
        });

    }

    render(){

        return(
            <ScrollView>
                <View  style={styles.container}>
                    <View style={styles.helpContainer}>
                        <View  style={styles.container}>
                           <Text  style={styles.getStartedText}>
                    Votre regime : {quelleRegime(this.state.regime)}
                               </Text>
                          </View>

                        <View style={styles.containerViewMacro}>
                        <Text
                            style={styles.getStartedText}>

                            Metabolisme de base : {needKal(this.state.age,this.state.taille,this.state.poids,this.state.sexe)} kal

                        </Text>

                        <Text
                            style={styles.getStartedText}>

                            Votre dépense énergetique : {needKalBrm(this.state.age,this.state.taille,this.state.poids,this.state.sexe,this.state.brm)} kal

                        </Text>


                        <Text  style={styles.getStartedText}>

                            Quantité de calories recommandée : {kalltotaly(this.state.age,this.state.taille,this.state.poids,this.state.sexe,this.state.brm)} kal

                        </Text>

                        <Text  style={styles.getStartedText}>
                            Lipides besoin : {calculLipide(this.state.age,this.state.taille,this.state.poids,this.state.sexe,this.state.brm)} g
                        </Text>

                        <Text  style={styles.getStartedText}>
                            Glucides besoin : {calculGlucide(this.state.age,this.state.taille,this.state.poids,this.state.sexe,this.state.brm)} g
                        </Text>

                        <Text  style={styles.getStartedText}>

                            Proteines besoin : {calculPro(this.state.age,this.state.taille,this.state.poids,this.state.sexe,this.state.brm)} g
                        </Text>


                            <View>
                                <View style={styles.boxWithShadow}>
                                    <PieChart
                                        width={screenWidth}
                                        data={this.data}
                                        /*
                                        data={{
                                            datasets: [{
                                                data: [
                                                    { name: 'Glucide', nb:12, color: '#F00', legendFontColor: '#F00', legendFontSize: 15 },
                                                    { name: 'Proteine', nb: 12, color: '#4250f4', legendFontColor: '#4250f4', legendFontSize: 15 },
                                                    { name: 'Lipide', nb: 12, color: '#04e578', legendFontColor: '#04e578', legendFontSize: 15 },
                                                ]
                                            }]
                                        }}

                                         */
                                        height={220}
                                        accessor="nb"
                                        chartConfig={chartConfig}
                                        backgroundColor="transparent"
                                        absolute/>
                                </View>
                            </View>

                        </View>


                    </View>
                </View>
            </ScrollView>
        )
    }
}



function isMale(value){
    if ( value === 'M'){
        return true
    } 
    return false
}

function quelleRegime(value){
    if (value=== 'S'){
        return 'Gardez la ligne'
    }
    if (value === 'P') {
        return 'Perte de poid'
    }
    if(value === 'A'){
        return 'Prise de masse '
    }
    return ''
}

function calculLipide(age,taille,poids,sexe,brm){
    var kal = kalltotaly(age,taille,poids,sexe,brm);
    var lip = (kal*0.30)/9;
    return lip.toFixed(2);
}

function calculGlucide(age,taille,poids,sexe,brm){
    const kal = kalltotaly(age, taille, poids, sexe, brm);
    const lip = (kal * 0.55) / 4;
    return lip.toFixed(2);
}

function calculPro(age,taille,poids,sexe,brm,regime){
    const kal = kalltotaly(age, taille, poids, sexe, brm);
    let lip = (kal * 0.15) / 4;
    if (regime==='A') {
        lip = (kal * 0.40) / 4;
    }
    return lip.toFixed(2);
}

function needKal(age,taille,poids,sexe) {
    const tailleTempory = Number.parseInt(taille, 10);

    const poidsTempory = Number.parseInt(poids, 10);
    age = 19;
    let res = 0;
    if (isMale(sexe)) {
            res= (66.5 + ((13.8 * poidsTempory) + (5 * tailleTempory) - (6.8 * age)))
        } else {
            res= (65.1 + ((9.6 * poidsTempory) + (1.9 * tailleTempory) - (4.7 * age)));
        }

    return res.toFixed(2);

}


function needKalBrm(age,taille,poids,sexe,brm) {
    let kalneed;
    const tailleTempory = Number.parseInt(taille, 10);
    const poidsTempory = Number.parseInt(poids, 10);
    age=19;
    if (isMale(sexe)) {
        kalneed = (66.5 + ((13.8 * poidsTempory) + (5 * tailleTempory) - (6.8 * age)));
    }else {
        kalneed = (65.1 + ((9.6 * poidsTempory) + (1.9 * tailleTempory) - (4.7 * age)));
    }
    const rest = (kalneed * brm) - (kalneed);
    return rest.toFixed(2)
}

function kalltotaly(age,taille,poids,sexe,brm) {
    const tailleTempory = Number.parseInt(taille, 10);
    const poidsTempory = Number.parseInt(poids, 10);
    age=19;
    const kalneed = (66.5 + ((13.8 * poidsTempory) + (5 * tailleTempory) - (6.8 * age))) * brm;
    if (isMale(sexe)){
        return kalneed.toFixed(2);
    }else{
        return (65.1 + ((9.6*poidsTempory) + (1.9*tailleTempory) - (4.7*age)));
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
        padding: 5,
        margin: 5
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
    containerViewMacro:{
        padding:10,
        margin:10,

    },
    titre:{
        padding:10,
        margin:10,
        fontSize:18,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
    },
    boxWithShadow: {
        borderColor:'#000', // if you need
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: '#666768',
        shadowRadius: 10,
        shadowOpacity: 1,
        borderRadius:16,
        margin:10
    }
});




const chartConfig = {
    backgroundColor: '#CFCFCF',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    decimalPlaces: 2,
};

const screenWidth = Dimensions.get('window').width;


