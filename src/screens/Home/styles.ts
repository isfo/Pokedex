import { Dimensions, StyleSheet } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";


const window = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        marginTop: getStatusBarHeight(),
        marginBottom: 0,
    },
    headerText:{
        fontSize: 38,
        textAlign: 'center',
        color: "yellow", 
        textShadowColor: 'blue', 
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5, 
        fontWeight: '800'
    },
    content: {
        marginTop: 0
    },
    matches: {
        marginTop: 0,
        marginLeft: 15,
        marginRight: 15,
        height: window.height - (50 + getStatusBarHeight()),
    },
    white: {
        color: '#FFF'
    },
    loading: {
        alignSelf: 'center',
        marginVertical: 20,
    }
});