/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { pickItems, shuffle } from "./components/Methods";

const ToggleButton = ({ isOpen, buttonOnClickCb }) => {
  return (
    <button type="button" onClick={buttonOnClickCb} className={"hover-shadow"}>
      {isOpen ? "Open" : "Close"}
    </button>
  );
};
const Button = ({ text, buttonOnClickCb }) => {
  return (
    <button type="button" onClick={buttonOnClickCb} className="hover-shadow">
      {text}
    </button>
  );
};
const LoadingScreen = () => {
  return (
    <div className="h-screen bg-cyan-50 flex items-center justify-center">
      <span className="loading"></span>
    </div>
  );
};
const WinningScreen = ({ playAgain }) => {
  return (
    <section>
      <p>You win!</p>
      <div>
        <Button text={"Play again?"} buttonOnClickCb={playAgain} />
      </div>
    </section>
  );
};
const LosingScreen = ({ playAgain }) => {
  return (
    <section>
      <p>You lose!</p>
      <div>
        <Button text={"Play again?"} buttonOnClickCb={playAgain} />
      </div>
    </section>
  );
};
const GameName = () => {
  return <section></section>;
};
const Difficulty = () => {
  return <section></section>;
};
const Title = () => {
  return (
    <section>
      <h1></h1>
    </section>
  );
};
const HighScore = () => {
  return <section></section>;
};
const Header = () => {
  return (
    <header>
      <Title />
      <HighScore />
    </header>
  );
};
const Gameboard = ({}) => {
  return <main></main>;
};
const Setting = () => {
  return (
    <main>
      <Title />
      <GameName />
      <Difficulty />
    </main>
  );
};
const Playing = ({ setIsSetting, highScore, playTurn, currentScore }) => {
  return (
    <>
      <Header
        highScore={highScore}
        currentScore={currentScore}
        setIsSetting={setIsSetting}
      />
      <Gameboard playTurn={playTurn} />
    </>
  );
};
const Footer = () => {
  return <footer className=""></footer>;
};
const MainPage = ({
  playTurn,
  isSoundOn,
  isMusicOn,
  highScore,
  playAgain,
  isSetting,
  setIsSoundOn,
  setIsMusicOn,
  currentScore,
  isDisplayWin,
  setIsSetting,
  isDisplayLose,
  isPlayingVideo,
  isDisplayAbout,
  setIsDisplayAbout,
  setIsPlayingVideo,
  currentPokemonList,
  setCurrentDifficulty,
}) => {
  let jsxToDisplay;
  if (isSetting)
    jsxToDisplay = <Setting setCurrentDifficulty={setCurrentDifficulty} />;
  else if (isDisplayLose) jsxToDisplay = <LosingScreen playAgain={playAgain} />;
  else if (isDisplayWin) jsxToDisplay = <WinningScreen playAgain={playAgain} />;
  else
    jsxToDisplay = (
      <Playing
        playTurn={playTurn}
        highScore={highScore}
        setIsSetting={setIsSetting}
        currentScore={currentScore}
        currentPokemonList={currentPokemonList}
      />
    );
  return (
    <div id="wrapper" className="h-screen bg-slate-700">
      {jsxToDisplay}
      <Footer
        isSoundOn={isSoundOn}
        isMusicOn={isMusicOn}
        setIsMusicOn={setIsMusicOn}
        setIsSoundOn={setIsSoundOn}
        isPlayingVideo={isPlayingVideo}
        isDisplayAbout={isDisplayAbout}
        setIsDisplayAbout={setIsDisplayAbout}
        setIsPlayingVideo={setIsPlayingVideo}
      />
    </div>
  );
};
const App = () => {
  // variable starts with _ is private and should not be passed to other components
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [isLoading, _setIsLoading] = useState(false);
  const [isDisplayWin, setIsDisplayWin] = useState(false);
  const [isDisplayLose, setIsDisplayLose] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isDisplayAbout, setIsDisplayAbout] = useState(false);
  const preloadPokemonNumber = 6; // 96 FIXME
  const [preloadPokemonList, setPreloadPokemonList] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState(6); // 12, 24, 48, 96
  const [currentPokemonList, _setCurrentPokemonList] = useState([]);
  const [_selectedIdList, _setSelectedIdList] = useState([]);
  const [highScore, _setHighScore] = useState(0);
  const currentScore = _selectedIdList.length;
  const _randomPickInPreload = () => {
    const tmp = pickItems(preloadPokemonList.length, currentDifficulty).map(
      (number) => {
        const item = preloadPokemonList[number];
        return { ...item };
      },
    );
    _setCurrentPokemonList(tmp);
  };
  const playAgain = () => {
    setIsDisplayLose(false);
    setIsDisplayWin(false);
    _setSelectedIdList([]);
    _randomPickInPreload();
  };
  const playTurn = (pokemonId) => {
    if (_selectedIdList.includes(pokemonId)) {
      setIsDisplayLose(true);
    } else {
      if (currentScore === highScore) _setHighScore(highScore + 1);
      _setSelectedIdList([..._selectedIdList, pokemonId]);
      _setCurrentPokemonList(shuffle(currentPokemonList));
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
            const tmp = pickItems(list.length, currentDifficulty).map(
              (number) => {
                const item = list[number];
                return { ...item };
              },
            );
            console.log(tmp);
            _setCurrentPokemonList(tmp);
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
  }, [currentDifficulty]);
  useEffect(() => {
    setTimeout(() => {
      _setIsLoading(false);
    }, 3500);
  }, []);
  return (
    <>
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
          highScore={highScore}
          currentScore={currentScore}
          playAgain={playAgain}
          playTurn={playTurn}
        />
      )}
    </>
  );
};

export default App;
