/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { pickItems, shuffle } from "./components/Methods";
import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./components/MainPage";
import * as Icon from "./components/Icons";
import BackgroundVideo from "./assets/video/background-pokemon-unique.mp4";
import BackgroundMusic from "./assets/sound/background-pokemon-unique.mp3";
import ClickSound from "./assets/sound/click.wav";
import FlipSound from "./assets/sound/flip.mp3";

const App = () => {
  // variable starts with _ is private and should not be passed to other components
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [isLoading, _setIsLoading] = useState(true);
  const [isDisplayWin, _setIsDisplayWin] = useState(false);
  const [isDisplayLose, _setIsDisplayLose] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [isDisplayAbout, setIsDisplayAbout] = useState(false);
  const preloadPokemonNumber = 24; // 48 FIXME
  const [preloadPokemonList, setPreloadPokemonList] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState(6); // 6, 10, 16, 24
  const [currentPokemonList, _setCurrentPokemonList] = useState([]);
  const [_selectedIdList, _setSelectedIdList] = useState([]);
  const [bestScore, _setBestScore] = useState(0);
  const currentScore = _selectedIdList.length;
  const playClick = () => {
    if (isSoundOn) {
      const audio = new Audio(ClickSound);
      audio.volume = 0.15;
      audio.play();
    }
  };
  const playFlip = () => {
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
    if (_selectedIdList.includes(pokemonId)) {
      _setIsDisplayLose(true);
    } else {
      if (currentScore === bestScore) _setBestScore(bestScore + 1);
      const nextScore = currentScore + 1;
      if (nextScore === currentDifficulty) _setIsDisplayWin(true);
      _setSelectedIdList([..._selectedIdList, pokemonId]);
      _setCurrentPokemonList(shuffle(currentPokemonList));
      playFlip();
    }
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
      }
    };
    pokemonArrayPromises(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
    );
  }, []);
  useEffect(() => {
    try {
      const tmp = pickItems(preloadPokemonList.length, currentDifficulty).map(
        (number) => {
          const item = preloadPokemonList[number];
          return { ...item };
        },
      );
      _setCurrentPokemonList(tmp);
      return () => {
        // console.log("change current difficult");
      };
    } catch (error) {
      // console.log(error);
    }
  }, [currentDifficulty, preloadPokemonList]);
  useEffect(() => {
    setTimeout(() => {
      _setIsLoading(false);
    }, 3500);
  }, []);
  // these don't need useEffect
  useEffect(() => {
    const video = document.getElementById("backgroundVideo");
    const music = document.getElementById("backgroundMusic");
    music.volume = 0.2;
    if (isPlayingVideo) video.play();
    else video.pause();
    if (isMusicOn) music.muted = false;
    else music.muted = true;
  }, [isMusicOn, isPlayingVideo]);
  return (
    <>
      <Icon.Pokemon />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <MainPage
          isSoundOn={isSoundOn}
          setIsSoundOn={setIsSoundOn}
          isMusicOn={isMusicOn}
          setIsMusicOn={setIsMusicOn}
          isPlayingVideo={isPlayingVideo}
          setIsPlayingVideo={setIsPlayingVideo}
          isDisplayAbout={isDisplayAbout}
          setIsDisplayAbout={setIsDisplayAbout}
          isDisplayWin={isDisplayWin}
          isDisplayLose={isDisplayLose}
          isSetting={isSetting}
          setIsSetting={setIsSetting}
          setCurrentDifficulty={setCurrentDifficulty}
          currentPokemonList={currentPokemonList}
          bestScore={bestScore}
          currentScore={currentScore}
          playAgain={playAgain}
          playTurn={playTurn}
          playClick={playClick}
        />
      )}
      <video
        loop
        muted
        autoPlay
        id="backgroundVideo"
        type="video/mp4"
        className="h-full object-cover brightness-75 p-4 fixed w-full -z-10 top-0 left-0"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <audio loop muted autoPlay id="backgroundMusic">
        <source src={BackgroundMusic} type="audio/mp3" />
      </audio>
    </>
  );
};

export default App;
