import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { PokemonModel } from "../../models/PokemonModel";
import { ProgressBar } from "../ProgressBar";
import { styles } from "./styles";

export function PokemonStats(pokemon: PokemonModel) {
    const colors = theme.pokemonTypeColors;
    
    function getStats() {
        if (pokemon?.stats === undefined) {
            return (<View />);
        }

        return pokemon.stats.map((stat, index) => {
            return (
                <View key={index} style={styles.stats}>
                    <Text style={styles.statName}>{stat.stat.name.replace('special-','Sp. ')}</Text>
                    {ProgressBar(stat.base_stat, 100, pokemon?.types == undefined ? '#666666' : colors[pokemon?.types[0]?.type?.name as keyof typeof colors])}
                    <Text style={styles.statValue}>{stat.base_stat}</Text>
                </View>
            )
        });
    }


    

    return (
        <View style={styles.boxStats}>
            <Text style={[styles.title, { color: pokemon?.types == undefined ? '#666666' : colors[pokemon?.types[0]?.type?.name as keyof typeof colors] }]}>Base Stats</Text>
            {getStats()}
        </View>
    )
}