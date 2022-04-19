import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { PokemonAbout } from "../../components/PokemonAbout";
import { PokemonStats } from "../../components/PokemonStats";
import { PokeTypes } from "../../components/PokeTypes";
import { theme } from "../../global/styles/theme";
import { usePokedex } from "../../hooks/usePokedex";
import { PokemonModel } from "../../models/PokemonModel";
import { propsStack, RootRouteProps } from "../../routes/NavigationProps";
import { styles } from "./styles";

export function DetailPage(route: any) {
    const params = useRoute<RootRouteProps<'DetailPage'>>()
    const navigation = useNavigation<propsStack>();
    const [pokemonDetail, setPokemonDetail] = useState<PokemonModel>({} as PokemonModel);
    const { pokemon, pokedex } = params.params;

    const colors = theme.pokemonTypeColors;

    

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
        (async () => {
            pokedex.PokemonDetail(pokemon.id)
                .then(data => {
                    setPokemonDetail(data);

                    // navigation.setOptions({
                    //     headerTitle: '' /*Capitalize(pokemon.name)*/,
                    //     headerStyle: {
                    //         backgroundColor: colors[data?.types[0]?.type?.name as keyof typeof colors]
                    //     }
                    // });
                });
        })();
    }, []);

    return (
        <LinearGradient
            style={styles.container}
            colors={[pokemonDetail?.types == undefined ? '#666666' : colors[pokemonDetail?.types[0]?.type?.name as keyof typeof colors], '#fff']}
            start={{ x: 0, y: 0 }}
            end={{ x: .8, y: .8 }}
        >
            <View style={[styles.bgteste, styles.header]}>
                <View style={styles.backBar}>
                    {/* <TouchableHighlight onPress={() => { navigation.goBack() }}>
                        <View>
                            <Text style={styles.backBarText}>Back</Text>
                        </View>
                    </TouchableHighlight> */}
                </View>

                <View style={[styles.supBox]}>
                    <Text style={[styles.bgteste, styles.pokemonId]}>#{pokemonDetail?.fullid}</Text>
                    <Text style={[styles.bgteste, styles.pokemonName]}>{pokemonDetail?.name}</Text>
                    <View style={[styles.typesBox]}>
                        {PokeTypes(pokemonDetail)}
                    </View>
                    <Image style={[styles.bgteste, styles.pokemonImage]} source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonDetail?.fullid}.png` }} />

                </View>

            </View>

            <View style={[styles.bottom]}>
                {PokemonAbout(pokemonDetail)}
                {PokemonStats(pokemonDetail)}
            </View>




        </LinearGradient>
    )
}

