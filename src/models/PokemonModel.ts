import { PokemonAbilityModel } from "./PokemonAbilityModel"
import { PokemonMoveModel } from "./PokemonMoveModel"
import { PokemonSpriteModel,  } from "./PokemonSpriteModel"
import { PokemonStatModel } from "./PokemonStatModel"
import { PokemonTypeModel } from "./PokemonTypeModel"

export type PokemonModel = {
    id: string,
    fullid: string,
    name: string,
    url: string,
    weight: number,
    height: number,
    order: number,
    fully: boolean,
    abilities: PokemonAbilityModel[],
    sprites: PokemonSpriteModel,
    stats: PokemonStatModel[],
    types: PokemonTypeModel[],
    moves: PokemonMoveModel[]
}