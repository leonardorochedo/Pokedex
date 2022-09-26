import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";

import pokebola from "../../assets/pokebola.png";
import team from "../../assets/team.png";

import "./PokeCard.css";

export function PokeCard() {
  const [pokeName, setPokeName] = useState("");
  const [pokemon, setPokemon] = useState({
    img: `${team}`,
    name: "???",
    id: 0,
    typeOne: "???",
    typeTwo: "???",
    height: 0,
    weight: 0,
    hp: 0,
    atk: 0,
    def: 0,
    sa: 0,
    sd: 0,
    speed: 0,
  });

  function consultAPI() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          img: data.sprites.front_default,
          name: data.forms[0].name,
          id: data.id,
          typeOne: data.types[0].type.name,
          typeTwo: data.types[1].type.name,
          height: data.height / 10,
          weight: data.weight / 10,
          hp: data.stats[0].base_stat,
          atk: data.stats[1].base_stat,
          def: data.stats[2].base_stat,
          sa: data.stats[3].base_stat,
          sd: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
        });
      });
  }

  return (
    <>
      <h1>
        Pokedéx <img id="pokebola" src={pokebola} alt="Pokebola" />
      </h1>
      <h2>Busque um Pokemón pelo nome ou o ID dele!</h2>
      <div className="form">
        <input
          autoFocus
          type="text"
          placeholder="Digite o Pokemon"
          onChange={(e) => setPokeName(e.target.value)}
        />
        <button onClick={consultAPI}>
          <span>
            <BsSearch size={20} />
          </span>
        </button>
      </div>
      <div className="container-info">
        <div className="poke-img">
          <img src={pokemon.img} alt="Foto do Pokemon" />
        </div>
        <div className="name-id">
          <p>
            {pokemon.name} #{pokemon.id}
          </p>
        </div>
        <div className="types">
          <p>{pokemon.typeOne}</p>
          <p>{pokemon.typeTwo}</p>
        </div>
        <div className="structure">
          <div className="structure-height">
            <p id="number">{pokemon.height} KG</p>
            <p id="description">Height</p>
          </div>
          <div className="structure-weight">
            <p id="number">{pokemon.weight} M</p>
            <p id="description">Weight</p>
          </div>
        </div>
        <div className="stats">
          <ul>
            <li>
              <p id="hp">HP</p> <p>{pokemon.hp}</p>
            </li>
            <li>
              <p id="atk">ATK</p> <p>{pokemon.atk}</p>
            </li>
            <li>
              <p id="def">DEF</p> <p>{pokemon.def}</p>
            </li>
            <li>
              <p id="sa">SA</p> <p>{pokemon.sa}</p>
            </li>
            <li>
              <p id="sd">SD</p> <p>{pokemon.sd}</p>
            </li>
            <li>
              <p id="speed">SPEED</p> <p>{pokemon.speed}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
