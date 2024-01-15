import React from "react";

const PokeCard = ({id, name, type, baseExperience}) => {
    <div>
        <h4>{name}</h4>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} width ='200'/>
        <p>{type}</p>
        <p>{baseExperience}</p>
    </div>
};

export default PokeCard