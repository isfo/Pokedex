import React, { useState } from "react";
import { Text, FlatList, View } from "react-native";
import { ListPokemons } from "../../services/pokedexService";
import { styles } from "./styles";

export  function Home() {
    
    let pokes: [] = [];

    alert('passou aq');
    ListPokemons(0)
    // .then(c=>{
    //     pokes = c; 
    //     //alert(JSON.stringify(pokes));
    // });
    
    

    return (
            <View>
                <View style={styles.header}>
                    <Text>oie 2</Text>
                </View>
            </View>           
            )
}
