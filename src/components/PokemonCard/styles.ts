import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        height: 100,
        padding: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    title: {
        textAlignVertical: "top",
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 24,
        fontWeight: '700',
        textTransform: 'capitalize',
    },
    titleBox: {
        width: '100%',
        height: 35,
    },
    image: {
        marginTop: -15,
        width: 120,
        height: 120,
        zIndex: 1,
    },
    imageReduced: {
        width: 60,
        height: 60,
        transform: [{ scaleX: -1 }]
    },
    halfBox: {
        height: 100,
    },
    boxImage: {
        width: '35%',
        paddingLeft: 0,
        paddingTop: 0,
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    boxDetail: {
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',

        height: 100
    },
    textFullID: {
        color: theme.colors.heading,
        opacity: 0.5,
        zIndex: 1,
        fontStyle: 'italic',
        fontSize: 48,
        fontWeight: '700',
        position: 'absolute',
        right: 5,
        bottom: -15,
    }
});