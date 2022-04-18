import { useContext, useEffect } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import { PokemonModel } from "../models/PokemonModel";
import { ListPokemons } from "../services/pokedexService";

export function usePokedex() {
    const context = useContext(PokemonContext);

    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }

    useEffect(() => {
        if (context.pokemons.length === 0) {
            context.LoadPokemons(0);
        }
    }, []);


    return context;
}