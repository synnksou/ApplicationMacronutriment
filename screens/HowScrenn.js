import React from  'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    View
}from 'react-native'

export default class HowScrenn extends React.Component{
    static navigationOptions = {
        title: 'Comment-ça marche ?',
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
            <ScrollView>
                <View style={styles.container}>
                <Text style={styles.title}>
                    Les macros, c’est quoi ?
                </Text>
                    <Text style={styles.text}>

                        “Macros”, c’est l’abréviation de “macronutriments”. Les macronutriments, ce sont les protéines, les lipides et les glucides. Calculer ses macros, c’est calculer le nombre de grammes de protéines, de lipides et de glucides dont on a besoin.

                        Quel est l’intérêt de calculer ses macros ?
                        Si on a pas d’objectif particulier, effectivement il n’y a pas d’intérêt et pas lieu de se prendre la tête. Il y a plein de gens très “fit” qui n’ont jamais compté leurs macros et qui n’en ont jamais eu le besoin.

                        Ceci-dit, si on a un objectif très axé sur l’apparence physique, connaître le nombre de glucides, lipides et protéines idéaux pour l’objectif en question sera beaucoup plus efficace que de compter les calories sans faire de distinctions glucides/lipides/protéines.

                        Quels sont les pourcentages recommandés ?
                        C’est là qu’il y a débat. Les recommandations varient fortement en fonction des sources.

                        ■ Les recommandations officielles privilégient les glucides :

                        Macros officielles
                        Source : iqa.vendee.fr/les-macronutriments.htm

                        ■ Les recommandations indépendantes un peu moins de glucides et plus de lipides et de protéines :

                        Macros de Lanutrition.fr
                        Source : lanutrition.fr

                        ■ Les recommandations des sites fitness préconisent souvent 40% de glucides 30% de lipides, 30% de protéines (voir parfois 35% de glucides, 35% de lipides, 30% de protéines. Ces pourcentages recommandés varient en fonction de l’objectif -sèche, prise de masse etc.)

                        Macros du site Bodybuilding.com
                        Source : bodybuilding.com

                        Comment calcule-t-on le nombre de grammes dont on a besoin pour chaque famille de macronutriments ?
                        Il faut d’abord calculer le nombre total de calories dont on a besoin. Il existe de multiples formules pour cela, en voici par exemple une ici.

                        Une autre formule plus rapide pour gens pressés est de multiplier son poids par un chiffre compris entre 28 et 34 (plutôt vers 28 si on est plutôt inactive ou qu’on souhaite maigrir, plutôt vers 34 si on ne souhaite pas perdre de poids ou qu’on est très active).

                        Par exemple, pour une femme de 60 kg qui souhaiterait un peu s’affiner mais sans perdre du poids, on pourrait choisir le multiplicateur 30. 30 x 60 = 1800 calories par jour.

                        Mais comme je l’ai précisé, il s’agit d’une formule rapide. Il existe de nombreuses autres formules et de nombreux calculateurs sur Internet pour prendre en compte plus de critères comme l’âge, le pourcentage de graisse ect. dans le calcul. (Si besoin, faire une petite recherche Google en tapant “calorie calculator”. La plupart des calculateurs américains ont aussi une option pour rentrer ses chiffres en système métrique.)

                        Une fois qu’on a obtenu son nombre de calories journalières, on va “découper” ce nombre en fonction des pourcentages qu’on a choisi.

                        Si on choisit des recommandations fitness du type 40% de glucides, 30% de lipides et 30% de protéines, cela va donner pour notre exemple à 1800 calories :

                        Glucides : 40% de 1800 = 720 calories
                        Protéines : 30% de 1800 = 540 calories
                        Lipides : 30% de 1800 = 540 calories

                        720 calories proviendront des glucides, 540 calories proviendront des protéines, 540 calories proviendront des lipides.

                        Sachant que :
                        ■ 1 g de glucides = 4 calories
                        ■ 1 g de protéines = 4 calories
                        ■ 1 g de lipides = 9 calories

                        On peut alors calculer le nombre de grammes pour chaque famille de macronutriments :
                        Glucides : 720 ÷ 4 = 180 g de glucides
                        Protéines : 540 ÷ 4 = 135 g de protéines
                        Lipides : 540 ÷ 9 = 60 g de lipides

                        Alors bien sûr, cela peut paraître beaucoup de protéines, mais c’est parce qu’on a choisi des recommandations de ratios fitness.

                        Si on choisit les recommandations officielles (55% de glucides, 15% de protéines, 30% de lipides), on obtient pour notre exemple à 1800 calories :
                        Glucides : 247,5 g de glucides
                        Protéines : 67, 5 g de protéines
                        Lipides : 60 g de lipides

                        Certaines personnes jugeront les recommandations fitness beaucoup trop élevées en protéines, d’autres personnes jugeront les recommandations officielles trop élevées en glucides, particulièrement pour nos modes de vie sédentaires. (Voir cet article de lanutrition.fr par exemple.)

                        Bref, quels que soient les ratios que vous choisirez pour calculer vos macros, vous trouverez toujours quelqu’un pour vous dire “ce ne sont pas les bons”. Par exemple, on peut critiquer les ratios fitness 40%/30%/30% et les trouver trop élevés en protéines et donc acidifiants pour l’organisme. C’est vrai si on ne mange pas assez de légumes, mais pas forcément vrai si on mange essentiellement des légumes verts comme source de glucides plutôt que du pain et des pâtes.

                        Calculateurs en ligne
                        Pour calculer vos macros en ligne de manière plus adaptée et en prenant en compte plus de critères (âge, objectifs etc.), il existe de nombreux calculateurs gratuits. En voici deux particulièrement complets :
                        – iifym.com/iifym-calculator
                        – macrofit.com/macro-calculator

                        (Ces deux calculateurs permettent d’entrer des chiffres en système métrique.)

                        Une fois qu’on a obtenu ses nombres de glucides, protéines et lipides, il suffit alors de lire les valeurs nutritionnelles des produits pour déterminer combien de grammes de glucides, protéines et lipides ils contiennent et les comparer à ses macros.
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title:{
        margin: 10,
        padding : 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:19,
        fontFamily : 'bold'
    },
    text: {
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        fontFamily: 'bold',
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },

});
