import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function ProgressBar(value: number, max: number, color: string) {

    const progress = (((value * 100) / max) * 200) / 255;

    const colors = theme.pokemonTypeColors;
    return (
        <View style={[styles.background, { width: 200, backgroundColor: '#cdcdcd' }]}>
            <View style={[styles.bar, { width: progress, backgroundColor: color }]}>
                <></>
            </View>
        </View>
    )
}