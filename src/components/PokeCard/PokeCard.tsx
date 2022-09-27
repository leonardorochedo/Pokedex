import { useEffect, useState } from "react";

// Visualize
import Alert from "@mui/material/Alert";
import { BsSearch } from "react-icons/bs";

// Images
import whois from "../../assets/whois.png";

import "./PokeCard.css";

export function PokeCard() {
  const [pokeName, setPokeName] = useState<string>("");

  const [backPokeColor, setBackPokeColor] = useState("#343333");
  const [typeTwoColor, setTypeTwoColor] = useState("#343333");

  const [alertStatus, setAlertStatus] = useState("none");

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

  const [pokemonID, setPokemonID] = useState(pokemon.id); //

  function consultAPI() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
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
            setPokemonID(pokemon.id); //
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
            setPokemonID(pokemon.id); //
        }
      })
      .catch((err) => {
        console.log(err);
        setAlertStatus("");
        setTimeout(() => {
          setAlertStatus("none");
        }, 5000);
      });

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

  function prevPokemon() {
    setPokemonID(pokemonID - 1);
    useEffect(() => {
      setPokeName(pokemonID.toString());
      consultAPI();
    }, [pokemonID]);
  }

  function nextPokemon() {
    setPokemonID(pokemonID + 1);
    useEffect(() => {
      setPokeName(pokemonID.toString());
      consultAPI();
    }, [pokemonID]);
  }

  return (
    <>
      <div className="header">
        <h1>Pokédex</h1>
        <h2>Search by a Pokémon with name or ID!</h2>
      </div>
      <div className="form">
        <input
          autoFocus
          type="text"
          placeholder="Name or ID"
          onChange={(e) => setPokeName(e.target.value.toLocaleLowerCase())}
        />
        <button onClick={consultAPI}>
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
          <button className="prev-button" onClick={prevPokemon}>
            PREV
          </button>
          <img src={pokemon.img} alt="Pic a Pokemon" />
          <button className="next-button" onClick={nextPokemon}>
            NEXT
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
          <p id="title-stats">Stats</p>
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
