import React, { useState } from 'react'

import './PokeCard.css'

export function PokeCard() {

  const [pokemon, setPokemon] = useState({
    name: '',
    id: 0,
    typeOne: '',
    typeTwo: '',
    height: 0,
    weight: 0,
    hp: 0,
    atk: 0,
    def: 0,
    sa: 0,
    sd: 0,
    speed: 0,
  })

  fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then((response) => response.json())
  .then((data) => {
    setPokemon({
      name: data.forms[0].name,
      id: data.id,
      typeOne: data.types[0].type.name,
      typeTwo: data.types[1].type.name,
      height: data.height/10,
      weight: data.weight/10,
      hp: data.stats[0].base_stat,
      atk: data.stats[1].base_stat,
      def: data.stats[2].base_stat,
      sa: data.stats[3].base_stat,
      sd: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
    })
  })

  return (
    <div className="container-info">
      <h1>Name: {pokemon.name} ID #{pokemon.id}</h1>
      <h1>Types : {pokemon.typeOne}, {pokemon.typeTwo}</h1>
      <h1>Height: {pokemon.height}</h1>
      <h1>Weight: {pokemon.weight}</h1>
      <h1>Stats: HP{pokemon.hp} ATK{pokemon.atk} DEF{pokemon.def} SA{pokemon.sa} SD{pokemon.sd} SPEED{pokemon.speed}</h1>
    </div>
  )
}