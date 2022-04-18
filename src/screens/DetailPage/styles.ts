import { Dimensions, StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { transparent } from "react-native-paper/lib/typescript/styles/colors";


const window = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        height: 600,
        padding: 0,
        overflow: 'hidden',
    },
    header: {
        width: '100%',
        height: 410,
        paddingHorizontal: 15,
        // marginTop: getStatusBarHeight(),
        marginBottom: 0,
        zIndex: 1,
    },
    bottom: {
        width: '100%',
        height: 500,
        paddingHorizontal: 15,
        // marginTop: getStatusBarHeight(),
        marginBottom: 0,
        backgroundColor: 'white'
    },
    backBarTouchable: {
        backgroundColor: 'transparent',
        color: '#fff',
    },
    backBar: {
        width: '100%',
        height: 40,
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: "transparent",
        padding: 0
    },
    backBarText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: '#fff',
        opacity: 1
    },
    supBox: {
        marginTop: 0,
        width: '100%',
        height: 80,
        flex: 1,
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: 'center',
    },
    typesBox: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    bgteste: {
        // backgroundColor: '#333',
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 12,
        color: '#fff',
    },
    pokemonImage: {
        marginTop: -15,
        width: window.width * .8,
        height: window.width * .8,
        maxWidth: 300,
        maxHeight: 300,
        zIndex: 1,
        alignSelf: 'center',
    },
    pokemonId: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#fff',
        opacity: 0.4,
        height: 34,
        width: '100%',
    },
    pokemonName: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 40,
        textAlignVertical: "bottom",
        lineHeight: 40,
        color: '#fff',
        textTransform: 'capitalize',
        width: '100%',
    }

});