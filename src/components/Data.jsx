/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { inRangePickNumberOfItems } from "./Methods";
import { v4 as uuid } from "uuid";

const Data = ({ numberOfCards, pokemon, setPokemon }) => {
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
              { name: results[number].name, id: uuid(), imageLink },
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

export default Data;
