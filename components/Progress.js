import React, {useState} from 'react'
import {PieChart} from 'react-native-chart-kit'
import {AsyncStorage, Dimensions, StyleSheet, View} from 'react-native'

export default class Progress extends  React.Component {

    state = {
        regime: '',
        brm: '',
        lipide: 0,
        glucide: 0,
        protaine: 0,

    };

    componentDidMount() {
        AsyncStorage.getItem('@MyStorage:brm', (error, value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({brm: value});
            }
        });
        AsyncStorage.getItem('@MyStorage:regime', (error, value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({regime: value});
            }
        });
        AsyncStorage.getItem('@MyStorage:lipide', (error, value) => {
            if (!error) { //If there are no errors
                //handle result
                this.setState({lipide: value});
            }
        });

    }

    render() {
        return (
            <View>
                <View style={styles.boxWithShadow}>
                    <PieChart
                        width={screenWidth}
                        data={data}
                        height={220}
                        accessor="nb"
                        chartConfig={chartConfig}
                        backgroundColor="transparent"
                        absolute/>
                </View>
            </View>

        )
    }


}


const data = [
    { name: 'Glucide', nb: 10, color: '#F00', legendFontColor: '#F00', legendFontSize: 15 },
    { name: 'Proteine', nb: 10, color: '#4250f4', legendFontColor: '#4250f4', legendFontSize: 15 },
    { name: 'Lipide', nb: 10, color: '#04e578', legendFontColor: '#04e578', legendFontSize: 15 },
];


const chartConfig = {
    backgroundColor: '#CFCFCF',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    decimalPlaces: 2,
};

const screenWidth = Dimensions.get('window').width;

const styles=StyleSheet.create({
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


