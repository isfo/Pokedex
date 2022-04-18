import { PokemonModel } from "../models/PokemonModel";
import { GetApi, ListApi, RequestType } from "./RequestService";


async function ListPokemons(page: number) {

    const result = await ListApi<PokemonModel>(RequestType.Pokemon, { limit: 10, offset: page * 10 });


    return result.results.map(pokemon => {
        pokemon.id = pokemon.url.split('/')[6];
        pokemon.abilities = [];
        pokemon.stats = [];
        pokemon.types = [];
        pokemon.moves = [];


        return pokemon;
    }) as PokemonModel[];
}

async function GetPokemon(id: string) {
    const pokemon = await GetApi<PokemonModel>(RequestType.Pokemon, id);
    return pokemon;
}

export { ListPokemons, GetPokemon }