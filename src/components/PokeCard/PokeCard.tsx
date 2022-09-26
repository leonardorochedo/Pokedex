import React, { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";

// Images
import team from "../../assets/team.png";

import "./PokeCard.css";

export function PokeCard() {
  const [pokeName, setPokeName] = useState("");
  const [APIStatus, setAPIStatus] = useState({ code: 0 });
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
            if (data.types[1]) {
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
                  }),
                  setAPIStatus({
                    code: data.status,
                  });
            }
             else {
                setPokemon({
                    img: data.sprites.front_default,
                    name: data.forms[0].name,
                    id: data.id,
                    typeOne: data.types[0].type.name,
                    typeTwo: '',
                    height: data.height / 10,
                    weight: data.weight / 10,
                    hp: data.stats[0].base_stat,
                    atk: data.stats[1].base_stat,
                    def: data.stats[2].base_stat,
                    sa: data.stats[3].base_stat,
                    sd: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                  }),
                  setAPIStatus({
                    code: data.status,
                  });;
             }
        });

    /*  useEffect(() => {
        if (pokemon.typeOne == "fire") {
            console.log("fire")
        }

        if (pokemon.typeOne == "grass") {
            console.log("grass")
        }

        if (pokemon.typeOne == "normal") {
            console.log("normal")
        }

        if (pokemon.typeOne == "eletric") {
             console.log("eletric")
        }

        if (pokemon.typeOne == "poison") {
             console.log("poison")
        }

        if (pokemon.typeOne == "psychic") {
             console.log("psychic")
        }
      }, [pokemon]) */
  }

  return (
    <>
      <h1>Pokédex</h1>
      <h2>Search by a Pokémon with name or ID!</h2>
      <div className="form">
        <input
          autoFocus
          type="text"
          placeholder="Name or ID"
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
          <img src={pokemon.img} alt="Pic a Pokemon" />
        </div>
        <div className="name-id">
          <p>
            {pokemon.name} #{pokemon.id}
          </p>
        </div>
        <div className="types">
          <p>{pokemon.typeOne}</p>
          {pokemon.typeTwo != '' ? <p>{pokemon.typeTwo}</p> : <p>???</p>}
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
            <p>Stats</p>
          <ul>
            <li>
              <p id="hp">HP</p> <p>{pokemon.hp} / 300</p>
            </li>
            <li>
              <p id="atk">ATK</p> <p>{pokemon.atk} / 300</p>
            </li>
            <li>
              <p id="def">DEF</p> <p>{pokemon.def} / 300</p>
            </li>
            <li>
              <p id="sa">SA</p> <p>{pokemon.sa} / 300</p>
            </li>
            <li>
              <p id="sd">SD</p> <p>{pokemon.sd} / 300</p>
            </li>
            <li>
              <p id="speed">SPEED</p> <p>{pokemon.speed} / 300</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
