import { NamedAPIResourceModel } from "./NamedApiResourceModel";

export interface PokemonStatModel {
    stat: NamedAPIResourceModel,
    effort: number,
    base_stat: number
}