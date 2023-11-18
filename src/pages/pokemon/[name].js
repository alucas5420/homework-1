import React from "react";
import {useRouter} from "next/router";
import {Loader, Image} from "semantic-ui-react";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Line from "@/components/Line";

export default function PokemonName() {
    const [pokemonInfo, setPokemonInfo] = React.useState({loading: true});
    const router = useRouter();

    React.useEffect(function(){
        if(pokemonInfo.name !== router.query.name && router.query.name) {
            console.log("Load in Pokemon Info", router.query.name );
            fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
            .then(r=> r.json())
            .then(function (r) {
                setPokemonInfo(r);
            })
            .catch((e) => setPokemonInfo({loading: false, name: router.query.name}));
        }
    });

    // console.log(router.query);

    return (
        <>
        <h1>Pokemon Name: {router.query.name}</h1>
        <br></br>
        <Line/>
        <Loader active = {pokemonInfo.loading || pokemonInfo.name !== router.query.name}/>
        {
            pokemonInfo.id 

            ? <>
            <h1>Normal Sprites: </h1>
            <Image src={pokemonInfo.sprites.front_default}></Image> <Image src={pokemonInfo.sprites.back_default}></Image>
            <Line/>
            <h1>Shiny Sprites: </h1>
            <Image src={pokemonInfo.sprites.front_shiny}></Image> <Image src={pokemonInfo.sprites.back_shiny}></Image>
            <Line/>
            </>

        : <>
        {(pokemonInfo.name !== router.query.name)

        ? <h2>Searching for Pokemon</h2>

    : <h2>Pokemon Not Found</h2>
    }
        
        </>
        }
        </>
    )
}