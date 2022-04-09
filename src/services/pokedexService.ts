import { useContext } from "react";


const URLBASE: string = "https://pokeapi.co/api/v2/pokemon";
let pageSize: number = 20;

function GetPager(page: number) {
    return `?offset=${page * pageSize}&limit=${pageSize}`;
}

async function ListPokemons(page: number = 0) {

    // fetch(URLBASE+GetPager(page))
    //     .then((response) => response.json())
    //     .then((json) => return json);


    try {
        const response = await fetch(URLBASE + GetPager(page));
        alert('asdasd');
        //console.log(response);

        const responseJson = await response.json();

        

        return responseJson.buildings;
    } catch (error) {
        console.error(error);
    }

    return 0;
}

export { ListPokemons }