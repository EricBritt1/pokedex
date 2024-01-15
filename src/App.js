import React from 'react';
import PokeDex from "./pokedex"
import pokemen from './pokemon'

function App() {
  return (
    <div>
    <PokeDex pokemon={pokemen}/>
    </div>
  );
}

export default App;
