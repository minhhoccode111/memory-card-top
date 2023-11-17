import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

const Data = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const data = () =>
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0", {
        method: "GET",
        mode: "cors",
      })
        .then((result) => {
          return result.json();
        })
        .then((obj) => {
          return obj.results;
        })
        .then((results) => {
          const randomNumberArray = [];
          const length = results.length;
          for (let i = 0; i < 20; i++) {
            const random = Math.floor(Math.random() * length);
            if (randomNumberArray.includes(random)) {
              i--;
            } else {
              randomNumberArray.push(random);
            }
          }
          setPokemon(
            results.slice(0, 12).map((item) => ({ ...item, id: uuid() })),
          );
        })
        .catch((err) => {
          console.log(err);
        });

    data();
    return async () => {
      console.log("Clean up use effect");
    };
  }, []);

  return (
    <ul className="text-black">
      {pokemon.map((item) => {
        return (
          <li key={item.id} className="text-center">
            <p>
              {item.name}{" "}
              <a
                className="text-lg underline"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                link
              </a>
            </p>
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
