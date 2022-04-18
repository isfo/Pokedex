import { PokemonModel } from "../../models/PokemonModel";
import { styles } from "./styles";
import { Text, View } from 'react-native';
import { theme } from "../../global/styles/theme";

export function PokeTypes(poke: PokemonModel) {

    const colors = theme.pokemonTypeColors;

    if (poke.types == undefined)
        return (<></>);
    return poke.types.map((item, index) => {
        return (
            <View key={index} style={[styles.type, { backgroundColor: colors[item.type.name as keyof typeof colors] }]}>
                <Text style={styles.typeText}>
                    {item.type.name}
                </Text>
            </View>
        );
    });
}