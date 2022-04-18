import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    type: {
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        color: 'red',
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 3,
        marginRight: 5,
        marginBottom: 5,
        zIndex: 2,
    },
    typeText: {
        fontFamily: theme.fonts.text500,
        fontSize: 12,
        fontWeight: '500',
        color: '#fff',
        textTransform: 'capitalize',
        zIndex: 2,

    }
});