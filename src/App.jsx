import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

const randomTwenty = (length) => {
  const randomNumberArray = [];
  for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * length);
    if (randomNumberArray.includes(random)) {
      i--;
    } else {
      randomNumberArray.push(random);
    }
  }
  return randomNumberArray;
};

const Data = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const pokemonArrayPromises = async () => {
      const data = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
        {
          mode: "cors",
        },
      );
      const json = await data.json();
      const results = json.results;
      const randomNumberArray = randomTwenty(results.length);
      const pokemonArray = randomNumberArray.map(async (number) => {
        const pokemonObj = results[number];
        const imageLinkData = await fetch(pokemonObj.url, {
          mode: "cors",
        });
        const imageLinkDataJson = await imageLinkData.json();
        const imageLink = imageLinkDataJson.sprites.front_default;
        return { ...pokemonObj, id: uuid(), imageLink };
      });
      return pokemonArray.filter((item) => item.imageLink !== null);
    };
    pokemonArrayPromises().then(async (promiseList) => {
      const list = await Promise.all(promiseList);
      console.log(list.length);
      setPokemon(list);
    });
    //
    return () => {
      console.log("Clean up use effect");
    };
  }, []);

  return (
    <ul className="text-black">
      {pokemon.map((item) => {
        return (
          <li key={item.id} className="flex items-center">
            <p>{item.name} </p>
            <img
              src={item.imageLink}
              alt={"A picture of " + item.name + " pokemon."}
            />
          </li>
        );
      })}
    </ul>
  );
};
const App = () => {
  return (
    <div id="wrapper" className="">
      <header></header>
      <main>
        <Data />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
