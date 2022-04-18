import { Dimensions, StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";


const window = Dimensions.get("window");

export const styles = StyleSheet.create({
    boxStats:{
        marginTop: 50
    },
    boxStatsGroup:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '100%'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    stats:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '45%'
    },
    statsAbility:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '100%'
    },
    statsAbilityName:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#aaa',
        width: 80
    },
    statsAbilityValue:{
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#333',
        width: 250
    },
    statName:{
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#aaa',
        width: 50,
    },
    statValue:{
        fontWeight: 'bold',
        fontSize: 14,
        color: '#333',
        width: 50
    }
});