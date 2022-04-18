import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { PokemonModel } from "../../models/PokemonModel";
import { ProgressBar } from "../ProgressBar";
import { styles } from "./styles";


export function PokemonAbout(pokemon: PokemonModel) {
    const colors = theme.pokemonTypeColors;

    function getAbilities() {
        if (pokemon?.abilities === undefined) {
            return (<View />);
        }

        return pokemon.abilities.map((ability, index) => { return ability.ability.name }).join(', ');
    }

    function getTypes() {
        if (pokemon?.types === undefined) {
            return (<View />);
        }
        return pokemon.types.map((type, index) => { return type.type.name }).join('/');
    }

    function Capitalize(texto: string) {
        if (texto === undefined)
            return '';

        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }


    return (
        <View style={styles.boxStats}>
            <Text style={[styles.title, { color: pokemon?.types == undefined ? '#666666' : colors[pokemon?.types[0]?.type?.name as keyof typeof colors] }]}>
                Pokedex data
            </Text>
            <Text>
                {Capitalize(pokemon.name)} is a {getTypes()} type pokemon.
            </Text>
            <View style={styles.boxStatsGroup}>
                <View style={styles.stats}>
                    <Text style={styles.statName}>Peso</Text>
                    <Text style={styles.statValue}>{pokemon?.weight / 10} kg</Text>
                </View>

                <View style={styles.stats}>
                    <Text style={styles.statName}>Altura</Text>
                    <Text style={styles.statValue}>{pokemon?.height * 10} cm</Text>
                </View>
            </View>
            <View style={styles.statsAbility}>
                <Text style={styles.statsAbilityName}>Abilities</Text>
                <Text style={styles.statsAbilityValue}> {getAbilities()}</Text>
            </View>
        </View>
    )
}