import { ApiList } from "../models/ApiList";
import { PokemonModel } from "../models/PokemonModel";

enum RequestType{
    Pokemon = "pokemon",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

interface PokeAPIOptions {
    limit?: number;
    offset?: number;
}

async function ListApi<T>(type: RequestType, options: PokeAPIOptions = { limit: 20, offset: 0 }): Promise<ApiList<T[]>> {
    const response = await fetch(`https://pokeapi.co/api/v2/${type}?limit=${options.limit}&offset=${options.offset}`);
    const data = await response.json();
    return data as ApiList<T[]>;
}

async function GetApi<T>(type: RequestType, id:string): Promise<T> {    
    const response = await fetch(`https://pokeapi.co/api/v2/${type}/${id}`);
    const data = await response.json();
    return data
}


export { GetApi, ListApi, RequestType }