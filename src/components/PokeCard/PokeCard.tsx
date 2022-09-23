import React, { useState } from 'react'

import './PokeCard.css'

export function PokeCard() {

  const [pokemon, setPokemon] = useState({
    img: '',
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
        img: data.sprites.front_default,
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
        <div className="poke-img">
            <img src={pokemon.img} alt="Foto do Pokemon" />
        </div>
        <div className="name-id">
            <p>{pokemon.name} #{pokemon.id}</p>
        </div>
        <div className="types">
            <p>{pokemon.typeOne}</p>
            <p>{pokemon.typeTwo}</p>
        </div>
        <div className="structure">
            <div className="structure-height">
                <p>{pokemon.height} KG</p>
                <p>Height</p>
            </div>
            <div className="structure-weight">
                <p>{pokemon.weight} M</p>
                <p>Weight</p>
            </div>
        </div>
        <div className="stats">
            <ul>
                <li><p>HP</p> <p>{pokemon.hp}</p></li>
                <li><p>ATK</p> <p>{pokemon.atk}</p></li>
                <li><p>DEF</p> <p>{pokemon.def}</p></li>
                <li><p>SA</p> <p>{pokemon.sa}</p></li>
                <li><p>SD</p> <p>{pokemon.sd}</p></li>
                <li><p>SPEED</p> <p>{pokemon.speed}</p></li>
            </ul>
        </div>
    </div>
  )
}