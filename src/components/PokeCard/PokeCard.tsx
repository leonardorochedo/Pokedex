import { useEffect, useState } from "react";

// Visualize
import Alert from "@mui/material/Alert";
import { BsSearch } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

// Images
import whois from "../../assets/whois.png";

import "./PokeCard.css";

export function PokeCard() {
  const [pokeName, setPokeName] = useState<string | number>("");

  const [backPokeColor, setBackPokeColor] = useState("#343333");
  const [typeTwoColor, setTypeTwoColor] = useState("#343333");

  const [alertStatus, setAlertStatus] = useState("none");

  const [APIStatusCode, setAPIStatusCode] = useState(0)
  const [pokemon, setPokemon] = useState({
    img: `${whois}`,
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

  const [pokemonID, setPokemonID] = useState(0);

  async function consultAPI() {

      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
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
            selectType(data.types[0].type.name),
            selectTypeExtra(data.types[1].type.name),
            setPokemonID(data.id);
        } else {
          setPokemon({
            img: data.sprites.front_default,
            name: data.forms[0].name,
            id: data.id,
            typeOne: data.types[0].type.name,
            typeTwo: "",
            height: data.height / 10,
            weight: data.weight / 10,
            hp: data.stats[0].base_stat,
            atk: data.stats[1].base_stat,
            def: data.stats[2].base_stat,
            sa: data.stats[3].base_stat,
            sd: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
          }),
            selectType(data.types[0].type.name),
            setPokemonID(data.id);
        }
      })
    
      .catch((err) => {
        setAlertStatus("");
        setTimeout(() => {
          setAlertStatus("none");
        }, 5000);
      })

    

    function selectType(type: String) {
      if (type == "normal") {
        setBackPokeColor("#bcbbb5");
      }

      if (type == "grass") {
        setBackPokeColor("#8dd851");
      }

      if (type == "fire") {
        setBackPokeColor("#fa5643");
      }

      if (type == "water") {
        setBackPokeColor("#56b0ff");
      }

      if (type == "fighting") {
        setBackPokeColor("#a45647");
      }

      if (type == "flying") {
        setBackPokeColor("#79a3ff");
      }

      if (type == "poison") {
        setBackPokeColor("#a95da1");
      }

      if (type == "ground") {
        setBackPokeColor("#f0cf58");
      }

      if (type == "rock") {
        setBackPokeColor("#cebd72");
      }

      if (type == "bug") {
        setBackPokeColor("#c2d21f");
      }

      if (type == "ghost") {
        setBackPokeColor("#7975d6");
      }

      if (type == "electric") {
        setBackPokeColor("#fde43f");
      }

      if (type == "psychic") {
        setBackPokeColor("#f763b2");
      }

      if (type == "ice") {
        setBackPokeColor("#96f2ff");
      }

      if (type == "dragon") {
        setBackPokeColor("#8674ff");
      }

      if (type == "dark") {
        setBackPokeColor("#8c6a56");
      }

      if (type == "steel") {
        setBackPokeColor("#c3c2da");
      }

      if (type == "fairy") {
        setBackPokeColor("#f9aeff");
      }
    }

    function selectTypeExtra(type: String) {
      if (type == "normal") {
        setTypeTwoColor("#bcbbb5");
      }

      if (type == "grass") {
        setTypeTwoColor("#8dd851");
      }

      if (type == "fire") {
        setTypeTwoColor("#fa5643");
      }

      if (type == "water") {
        setTypeTwoColor("#56b0ff");
      }

      if (type == "fighting") {
        setTypeTwoColor("#a45647");
      }

      if (type == "flying") {
        setTypeTwoColor("#79a3ff");
      }

      if (type == "poison") {
        setTypeTwoColor("#a95da1");
      }

      if (type == "ground") {
        setTypeTwoColor("#f0cf58");
      }

      if (type == "rock") {
        setTypeTwoColor("#cebd72");
      }

      if (type == "bug") {
        setTypeTwoColor("#c2d21f");
      }

      if (type == "ghost") {
        setTypeTwoColor("#7975d6");
      }

      if (type == "electric") {
        setTypeTwoColor("#fde43f");
      }

      if (type == "psychic") {
        setTypeTwoColor("#f763b2");
      }

      if (type == "ice") {
        setTypeTwoColor("#96f2ff");
      }

      if (type == "dragon") {
        setTypeTwoColor("#8674ff");
      }

      if (type == "dark") {
        setTypeTwoColor("#8c6a56");
      }

      if (type == "steel") {
        setTypeTwoColor("#c3c2da");
      }

      if (type == "fairy") {
        setTypeTwoColor("#f9aeff");
      }
    }
  }

  // Buttons Prev / Next
  function prevPokemon() {
    setPokemonID(pokemonID - 1);
    setPokeName(pokemonID - 1);
    consultAPI();
  }

  function nextPokemon() {
    setPokemonID(pokemonID + 1);
    setPokeName(pokemonID + 1);
    consultAPI();
  }

  // Progress Bar
  const [statsBar, setStatsBar] = useState({
    hp: 0,
    atk: 0,
    def: 0,
    sa: 0,
    sd: 0,
    speed: 0,
  })

  useEffect(() => {
    setStatsBar({
      hp: pokemon.hp * 100 / 300,
      atk: pokemon.atk * 100 / 300,
      def: pokemon.def * 100 / 300,
      sa: pokemon.sa * 100 / 300,
      sd: pokemon.sd * 100 / 300,
      speed: pokemon.speed * 100 / 300,
    })
  }, [pokemon])

  // Caso o usuário de enter no form
  document.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
      // const buttonForm = document.getElementById('search')?.click()
      consultAPI()
  }}, false);

  return (
    <>
      <div className="header">
        <h1>Pokédex</h1>
        <h2>Search for a Pokémon by name or ID!</h2>
      </div>
      <div className="form" onSubmit={consultAPI}>
        <input
          autoFocus
          type="text"
          placeholder="Name or ID"
          onChange={(e) => setInterval(() => {setPokeName(e.target.value.toLocaleLowerCase())} ,3000)}
        />
        <button id="search" type="submit" onClick={consultAPI}>
          <span>
            <BsSearch size={20} />
          </span>
        </button>
      </div>
      <div className="alert-error" style={{ display: alertStatus }}>
        <Alert id="alert" severity="error">
          Digite um valor válido
        </Alert>
      </div>
      <div className="container-info">
        <div className="poke-img" style={{ backgroundColor: backPokeColor }}>
          <button id="prev-button" className="prev-button" onClick={prevPokemon}>
            <GrFormPrevious size={25} />
          </button>
          <img src={pokemon.img} alt="Pic a Pokemon" />
          <button className="next-button" onClick={nextPokemon}>
            <GrFormNext size={25} />
          </button>
        </div>
        <div className="name-id">
          <p>{pokemon.name}</p>
          <p id="id-pokemon">#{pokemon.id}</p>
        </div>
        <div className="types">
          <p style={{ color: backPokeColor }}>{pokemon.typeOne}</p>
          {pokemon.typeTwo != "" ? (
            <p style={{ color: typeTwoColor }}>{pokemon.typeTwo}</p>
          ) : (
            <p>???</p>
          )}
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
          <p id="title-stats">Base Stats</p>
          <ul>
            <li>
              <p id="hp">HP</p>
              <div className="bar-stats">
                <div className="hp-bar" style={{ width: `${statsBar.hp}%` }}>.</div>
                <p>{pokemon.hp} / 300</p>
              </div>
            </li>
            <li>
              <p id="atk">ATK</p>
              <div className="bar-stats">
                <div className="atk-bar" style={{ width: `${statsBar.atk}%` }}>.</div>
                <p>{pokemon.atk} / 300</p>
              </div>
            </li>
            <li>
              <p id="def">DEF</p>
              <div className="bar-stats">
                <div className="def-bar" style={{ width: `${statsBar.def}%` }}>.</div>
                <p>{pokemon.def} / 300</p>
              </div>
            </li>
            <li>
              <p id="sa">SA</p>
              <div className="bar-stats">
                <div className="sa-bar" style={{ width: `${statsBar.sa}%` }}>.</div>
                <p>{pokemon.sa} / 300</p>
              </div>
            </li>
            <li>
              <p id="sd">SD</p>
              <div className="bar-stats">
                <div className="sd-bar" style={{ width: `${statsBar.sd}%` }}>.</div>
                <p>{pokemon.sd} / 300</p>
              </div>
            </li>
            <li>
              <p id="speed">SPEED</p>
              <div className="bar-stats">
                <div className="speed-bar" style={{ width: `${statsBar.speed}%` }}>.</div>
                <p>{pokemon.speed} / 300</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
