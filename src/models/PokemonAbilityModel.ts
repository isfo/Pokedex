import { NamedAPIResourceModel } from "./NamedApiResourceModel";

export interface PokemonAbilityModel {
    is_hidden: boolean,
    slot: number,
    ability: NamedAPIResourceModel
}