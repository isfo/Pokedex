import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useContext, useEffect, useState } from "react";
import { Text, FlatList, View, ActivityIndicator, Pressable } from "react-native";
import { Background } from "../../components/Background";
import { PokemonCard } from "../../components/PokemonCard";
import { usePokedex } from "../../hooks/usePokedex";
import { styles } from "./styles";

import { propsNavigationStack, propsStack } from "../../routes/NavigationProps";
import { PokemonModel } from "../../models/PokemonModel";


export function Home() {
    const { pokemons, LoadPokemons, isLoading } = usePokedex();

    const loadResources = async () => {
        LoadPokemons();
    }

    const renderFooter = () => {
        if (!isLoading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator color={'#ffffff'} />
            </View>
        );
    };


    const navigation = useNavigation<propsStack>();

    function GoToDetail(item: PokemonModel) {
        navigation.navigate('DetailPage', { pokemon: item });
    }

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Pókedex</Text>
            </View>
            <FlatList
                data={pokemons}
                keyExtractor={item => item.name}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => { GoToDetail(item) }}>
                            <PokemonCard key={item.id} pokemon={item} />
                        </Pressable>
                    );
                }}
                ItemSeparatorComponent={() => (
                    <Text></Text>
                )}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                onEndReached={loadResources}
                onEndReachedThreshold={0.3}
                ListFooterComponent={renderFooter}
            />
        </>
    )
}

