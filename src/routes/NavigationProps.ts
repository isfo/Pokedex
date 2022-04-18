import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PokemonModel } from "../models/PokemonModel";

export type propsNavigationStack = {
    Home: undefined;
    DetailPage: {
        pokemon: PokemonModel
    };
}

export type RootRouteProps<RouteName extends keyof propsNavigationStack> = RouteProp<
    propsNavigationStack,
  RouteName
>;

export type propsStack = NativeStackNavigationProp<propsNavigationStack>