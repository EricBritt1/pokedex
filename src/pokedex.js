import React from "react";
import PokeCard from "./pokecard";

const PokeDex = ({pokemon}) => {
   return (
    <div>
        {pokemon.map(p => (
            <PokeCard key={p.id} id={p.id} name={p.name} type={p.type} baseExperience={p.base_experience} />
        ))}
    </div>
   )
};

export default PokeDex;