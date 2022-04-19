import React, { ReactNode, useEffect, useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { PokemonModel } from '../../models/PokemonModel';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { usePokedex } from '../../hooks/usePokedex';
import { PokeTypes } from '../PokeTypes';
import { PokemonContextType } from '../../contexts/PokemonContext';

type Props = {
    pokemon: PokemonModel,
    pokedex: PokemonContextType
};

export function PokemonCard({ pokemon, pokedex }: Props) {

    const colors = theme.pokemonTypeColors;

    const [isLoading, setIsLoading] = useState(true);

    // const pokedex = usePokedex();

    const [pokemonDetail, setPokemonDetail] = useState<PokemonModel>({} as PokemonModel);


    useEffect(() => {

        (async () => {
            pokedex.PokemonDetail(pokemon.id)
                .then(data => {
                    pokemon = data;
                    setPokemonDetail(data);
                    setIsLoading(false);
                });
        })();

    }, []);

    return (
        <View>


            <LinearGradient
                style={styles.container}
                colors={[pokemonDetail?.types == undefined ? '#666666' : colors[pokemonDetail?.types[0]?.type?.name as keyof typeof colors], '#fff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 4 }}
            >
                <View style={[styles.halfBox, styles.boxImage]}>

                    {
                        isLoading
                            ? <ActivityIndicator style={styles.image} size="large" color="#fff" />
                            : <Image style={styles.image} source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonDetail?.fullid}.png` }} />
                    }
                </View>

                <View style={[styles.halfBox, styles.boxDetail]}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>{pokemon.name}</Text>
                    </View>
                    {PokeTypes(pokemonDetail)}
                </View>

                <Text style={styles.textFullID}>
                    #{pokemon?.fullid}
                </Text>

            </LinearGradient>
        </View>
    )

}
