/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

const inRangePickNumberOfItems = (inRange, numberOfItems = 24) => {
  const randomNumberArray = [];
  for (let i = 0; i < numberOfItems; i++) {
    const random = Math.floor(Math.random() * inRange);
    if (randomNumberArray.includes(random)) i--;
    else randomNumberArray.push(random);
  }
  return randomNumberArray;
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return [...array];
};

const Data = ({ numberOfCards, pokemon, setPokemon }) => {
  // const [numberOfCards, setNumberOfCards] = useState(24);
  console.log(numberOfCards);
  useEffect(() => {
    const pokemonArrayPromises = async (url, index = 0) => {
      try {
        const data = await fetch(url, { mode: "cors" });
        const dataJson = await data.json();
        const results = dataJson.results;
        // in range from 0 to results.length pick 24 numbers
        inRangePickNumberOfItems(
          results.length,
          numberOfCards + 2, // 2 extra items in case of item doesn't have image link
        )
          .reduce(async (total, number) => {
            const totalResolved = await total;
            if (totalResolved.length === numberOfCards) return totalResolved;
            const imageLinkData = await fetch(results[number].url, {
              mode: "cors",
            });
            const imageLinkDataJson = await imageLinkData.json();
            const imageLink = imageLinkDataJson.sprites.front_default;
            if (imageLink === null) return totalResolved;
            return [
              ...totalResolved,
              { ...results[number], id: uuid(), imageLink },
            ];
          }, Promise.resolve([]))
          .then((list) => {
            console.log(list);
            setPokemon(list);
            return list;
          });
      } catch (error) {
        console.log(error);
        // recursive try 3 more times
        if (index === 3) return;
        pokemonArrayPromises(url, index + 1);
      }
    };

    pokemonArrayPromises(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
    );

    return () => {
      console.log("Clean up use effect");
    };
  }, [numberOfCards, setPokemon]);

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
  // const [pokemon, setPokemon] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(24);
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div id="wrapper" className="">
      <header></header>
      <main>
        <Data
          numberOfCards={numberOfCards}
          pokemon={pokemon}
          setPokemon={setPokemon}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
