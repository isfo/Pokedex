import { Dimensions, StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";


const window = Dimensions.get("window");

export const styles = StyleSheet.create({
    boxStats:{
        marginTop: 20
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    stats:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    statName:{
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#aaa',
        width: 80,
        maxWidth: 80,
        minWidth: 80
    },
    statValue:{
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#333',
        width: 30
    }
});