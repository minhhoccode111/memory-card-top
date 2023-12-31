import { useEffect, useState, createContext } from "react";
import { v4 as uuid } from "uuid";
import "./styles/flicker.css";
import "./styles/button.css";
import "./styles/roll-in.css";
import "./App.css";
import BackgroundVideo from "./assets/video/background-pokemon-unique.mp4";
import BackgroundMusic from "./assets/sound/background-pokemon-unique.mp3";
import { pickItems, shuffle } from "./components/Methods";
import LoadingScreen from "./components/LoadingScreen";
import ClickSound from "./assets/sound/click.wav";
import FlipSound from "./assets/sound/flip.mp3";
import MainPage from "./components/MainPage";

// this must be global because we don't want to create new music track every time a component rerender
const music = new Audio(BackgroundMusic);
music.volume = 0.2;

export const DifficultyContext = createContext({
  setCurrentDifficulty: () => {},
  playAgain: () => {},
});

export const GameboardContext = createContext({
  currentPokemonList: [],
  playTurn: () => {},
  playClick: () => {},
});

export const SettingContext = createContext({
  isSoundOn: true,
  isMusicOn: false,
  setIsSetting: () => {},
  setIsSoundOn: () => {},
  setIsMusicOn: () => {},
});

export const ScoreContext = createContext({
  bestScore: 0,
  currentScore: 0,
});

const App = () => {
  // variable starts with _ is private and should not be passed to other components
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isSetting, setIsSetting] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [canClickPlay, setCanClickPlay] = useState(false);
  const [isDisplayWin, _setIsDisplayWin] = useState(false);
  const [isDisplayLose, _setIsDisplayLose] = useState(false);
  const preloadPokemonNumber = 24;
  const [preloadPokemonList, setPreloadPokemonList] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState(6); // 6, 10, 16, 24
  const [currentPokemonList, _setCurrentPokemonList] = useState([]);
  const [_selectedIdList, _setSelectedIdList] = useState([]);
  const [bestScore, _setBestScore] = useState(0);
  useEffect(() => {
    const data = localStorage.getItem("unique-pokemon-best-score");
    if (data !== null) {
      const bestScore = JSON.parse(data);
      _setBestScore(bestScore);
    }
  }, []);
  const currentScore = _selectedIdList.length;
  const playClick = () => {
    if (isSoundOn) {
      const audio = new Audio(ClickSound);
      audio.volume = 0.15;
      audio.play();
    }
  };
  const _playFlip = () => {
    if (isSoundOn) {
      const audio = new Audio(FlipSound);
      audio.volume = 0.2;
      audio.play();
    }
  };
  const _randomPickInPreload = () => {
    const tmp = pickItems(preloadPokemonNumber, currentDifficulty).map(
      (number) => {
        const item = preloadPokemonList[number];
        return { ...item };
      },
    );
    _setCurrentPokemonList(tmp);
  };
  const playAgain = () => {
    _setIsDisplayLose(false);
    _setIsDisplayWin(false);
    _setSelectedIdList([]);
    _randomPickInPreload();
  };
  const playTurn = (pokemonId) => {
    // lose condition
    if (_selectedIdList.includes(pokemonId)) return _setIsDisplayLose(true);
    if (currentScore === bestScore) {
      _setBestScore(bestScore + 1); // increase best score next render
      localStorage.setItem(
        "unique-pokemon-best-score",
        JSON.stringify(bestScore + 1),
      );
    }
    const nextScore = currentScore + 1; // increase next score next render
    if (nextScore === currentDifficulty) _setIsDisplayWin(true); // win condition
    _setSelectedIdList([..._selectedIdList, pokemonId]);
    _setCurrentPokemonList(shuffle(currentPokemonList));
    _playFlip();
  };

  useEffect(() => {
    const pokemonArrayPromises = async (url, index = 0) => {
      try {
        const data = await fetch(url, { mode: "cors" });
        const dataJson = await data.json();
        const results = dataJson.results;
        pickItems(
          results.length,
          preloadPokemonNumber + 2, // 2 extra items in case of item doesn't have image link
        )
          .reduce(async (total, number) => {
            const totalResolved = await total;
            const len = totalResolved.length;
            if (len === preloadPokemonNumber) return totalResolved;
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
            setPreloadPokemonList(list);
          });
      } catch (error) {
        console.log(error);
        // recursive try 3 more times
        if (index === 3) return;
        pokemonArrayPromises(url, index + 1);
      } finally {
        setCanClickPlay(true);
      }
    };
    pokemonArrayPromises(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
    );
  }, []);
  useEffect(() => {
    // when preload pokemon list is already done fetching (first load),
    // or when current difficulty change then
    // reset current pokemon list to pick pokemon in the preload pool
    try {
      const tmp = pickItems(preloadPokemonList.length, currentDifficulty).map(
        (number) => {
          const item = preloadPokemonList[number];
          return { ...item };
        },
      );
      _setCurrentPokemonList(tmp);
    } catch (error) {
      // console.log(error);
    }
  }, [currentDifficulty, preloadPokemonList]);

  useEffect(() => {
    if (isMusicOn) music.play();
    else music.pause();
    const playAudio = () => {
      music.currentTime = 0;
      music.play();
    };
    music.addEventListener("ended", playAudio);

    return () => {
      music.removeEventListener("ended", playAudio);
    };
  }, [isMusicOn]);
  return (
    <>
      {isLoading ? (
        <LoadingScreen
          playClick={playClick}
          isMusicOn={isMusicOn}
          setIsMusicOn={setIsMusicOn}
          setIsLoading={setIsLoading}
          canClickPlay={canClickPlay}
        />
      ) : (
        <SettingContext.Provider
          value={{
            isSoundOn,
            isMusicOn,
            setIsSetting,
            setIsSoundOn,
            setIsMusicOn,
          }}
        >
          <ScoreContext.Provider value={{ bestScore, currentScore }}>
            <GameboardContext.Provider
              value={{ currentPokemonList, playTurn, playClick }}
            >
              <DifficultyContext.Provider
                value={{ playAgain, setCurrentDifficulty }}
              >
                <MainPage
                  isDisplayWin={isDisplayWin}
                  isDisplayLose={isDisplayLose}
                  isSetting={isSetting}
                />
              </DifficultyContext.Provider>
            </GameboardContext.Provider>
          </ScoreContext.Provider>
        </SettingContext.Provider>
      )}
      <video
        loop
        muted
        autoPlay
        id="backgroundVideo"
        type="video/mp4"
        className="h-full object-cover brightness-75 fixed w-full -z-10 top-0 left-0 bg-white"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </>
  );
};

export default App;
