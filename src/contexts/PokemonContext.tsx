import React, { useContext, useState, Children } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { PokemonModel } from "../models/PokemonModel";
import { GetPokemon, ListPokemons } from "../services/pokedexService";
import { ListApi, RequestType } from "../services/RequestService";


export type PokemonContextType = {
    pokemons: PokemonModel[];
    loadedPages: number[];
    isLoading: boolean;
    SetupPokemons: (page: number, pokes: PokemonModel[]) => Promise<void>;
    LoadPokemons: (page?: number | undefined, force?: boolean) => Promise<void>;
    PokemonDetail: (id: string) => Promise<PokemonModel>;
}

export const PokemonContext = createContext({} as PokemonContextType);

export const PokemonContextProvider = (props: any) => {

    const [pokemons, setPokemons] = useState<PokemonModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadedPages, setLoadedPages] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(-1);

    async function SetupPokemons(page: number, pokes: PokemonModel[]) {
        setLoadedPages([...loadedPages, page]);
        setPokemons([...pokemons, ...pokes]);
    }

    async function LoadPokemons(page: number | undefined, force: boolean = false) {
        if (isLoading)
            return;

        setIsLoading(true);
        if (currentPage === -1) {
            if (page === undefined) {
                page = 0;
            }
        }
        else if (page === undefined) {
            page = currentPage + 1;
        }
        setCurrentPage(page);

        if (loadedPages.includes(page) && !force) {
            return;
        }
        try {
            const data = await ListPokemons(page);

            const loadedPokemons = data.map(item => {
                item.fullid = item.id.toString().padStart(3, '0');
                item.fully = false;
                return item;
            })

            setPokemons([...pokemons, ...loadedPokemons as PokemonModel[]]);
            setLoadedPages([...loadedPages, currentPage]);
            setIsLoading(false);
        }
        catch (err) {
            console.log(err);
            setIsLoading(false);
        };
    }

    async function PokemonDetail(id: string): Promise<PokemonModel> {
        const pokemon = pokemons.find(item => item.id === id);
        if (pokemon && pokemon.fully) {
            console.log('pokemon already fully loaded');
            return pokemon;
        }

        var poke = await GetPokemon(id);

        setPokemons(pokemons.map(item => {
            if (item.id == poke.id) {
                poke.fullid = poke.id.toString().padStart(3, '0');
                poke.fully = true;
                return poke;
            }
            return item;
        }));

        return poke;
    }


    return (
        <PokemonContext.Provider value={{ pokemons, isLoading, loadedPages, PokemonDetail, LoadPokemons, SetupPokemons }}>
            {props?.children}
        </PokemonContext.Provider>
    );
}


