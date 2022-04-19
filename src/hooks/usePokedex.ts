import { useContext, useEffect } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

export function usePokedex() {
    const context = useContext(PokemonContext);

    if (!context) {
        throw new Error("Context must be used within a Provider");
    }

    useEffect(() => {
        console.log("usePokedex hook");
        
        if (context.pokemons.length === 0) {
            context.LoadPokemons(0);
        }
    }, []);


    return context;
}