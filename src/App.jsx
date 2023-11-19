/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import { pickItems, shuffle } from "./components/Methods";

const ToggleButton = ({ text, isOpen, buttonOnClickCb }) => {
  return (
    <div>
      <button
        type="button"
        onClick={buttonOnClickCb}
        className={"hover-shadow"}
      >
        <span className="capitalize">{text}</span>
        {isOpen ? " is on" : " is off"}
      </button>
    </div>
  );
};
const Button = ({ text, buttonOnClickCb }) => {
  return (
    <div>
      <button
        type="button"
        onClick={buttonOnClickCb}
        className="hover-shadow capitalize"
      >
        {text}
      </button>
    </div>
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
  return (
    <section>
      <h2 className="text-2xl">Memory Game</h2>
    </section>
  );
};
const Difficulty = ({ setCurrentDifficulty, setIsSetting, playAgain }) => {
  return (
    <section className="">
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(6);
        }}
        text={"easy"}
      />
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(12);
        }}
        text={"medium"}
      />
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(24);
        }}
        text={"hard"}
      />
      <Button
        buttonOnClickCb={() => {
          playAgain();
          setIsSetting(false);
          setCurrentDifficulty(48);
        }}
        text={"insane"}
      />
    </section>
  );
};
const Title = ({ buttonOnClickCb }) => {
  return (
    <button type="button" onClick={buttonOnClickCb}>
      <h1 className="text-4xl">Unique Pokemon</h1>
    </button>
  );
};
const CurrentScore = ({ currentScore }) => {
  return <div>{currentScore}</div>;
};
const BestScore = ({ bestScore }) => {
  return <div>{bestScore}</div>;
};
const DisplayScore = ({ bestScore, currentScore }) => {
  return (
    <section>
      <BestScore bestScore={bestScore} />
      <CurrentScore currentScore={currentScore} />
    </section>
  );
};
const Header = ({ bestScore, currentScore, setIsSetting }) => {
  return (
    <header>
      <Title buttonOnClickCb={() => setIsSetting(true)} />
      <DisplayScore bestScore={bestScore} currentScore={currentScore} />
    </header>
  );
};
const Gameboard = ({ playTurn, currentPokemonList }) => {
  return (
    <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 mx-auto gap-4 overflow-y-auto">
      {currentPokemonList.map((item) => (
        <button
          onClick={() => playTurn(item.id)}
          key={item.id}
          className="flex flex-col w-48 h-56 bg-cyan-200 p-4"
          type="button"
        >
          <img src={item.imageLink} alt={"An image of " + item.name} />
          <p>{item.name}</p>
        </button>
      ))}
    </main>
  );
};
const Setting = ({ setCurrentDifficulty, setIsSetting, playAgain }) => {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <Title />
      <GameName />
      <Difficulty
        playAgain={playAgain}
        setIsSetting={setIsSetting}
        setCurrentDifficulty={setCurrentDifficulty}
      />
    </main>
  );
};
const Playing = ({
  playTurn,
  bestScore,
  setIsSetting,
  currentScore,
  currentPokemonList,
}) => {
  return (
    <>
      <Header
        bestScore={bestScore}
        currentScore={currentScore}
        setIsSetting={setIsSetting}
      />
      <Gameboard playTurn={playTurn} currentPokemonList={currentPokemonList} />
    </>
  );
};
const Footer = ({
  isSoundOn,
  isMusicOn,
  setIsSoundOn,
  setIsMusicOn,
  isPlayingVideo,
  isDisplayAbout,
  setIsPlayingVideo,
  setIsDisplayAbout,
}) => {
  return (
    <footer className="flex">
      <ToggleButton
        text={"Sound"}
        isOpen={isSoundOn}
        buttonOnClickCb={() => setIsSoundOn(!isSoundOn)}
      />
      <ToggleButton
        text={"Music"}
        isOpen={isMusicOn}
        buttonOnClickCb={() => setIsMusicOn(!isMusicOn)}
      />
      <ToggleButton
        text={"Background video"}
        isOpen={isPlayingVideo}
        buttonOnClickCb={() => setIsPlayingVideo(!isPlayingVideo)}
      />
      <ToggleButton
        text={"About"}
        isOpen={isDisplayAbout}
        buttonOnClickCb={() => setIsDisplayAbout(!isDisplayAbout)}
      />
    </footer>
  );
};
const MainPage = ({
  playTurn,
  isSoundOn,
  isMusicOn,
  bestScore,
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
    jsxToDisplay = (
      <Setting
        playAgain={playAgain}
        setIsSetting={setIsSetting}
        setCurrentDifficulty={setCurrentDifficulty}
      />
    );
  else if (isDisplayLose) jsxToDisplay = <LosingScreen playAgain={playAgain} />;
  else if (isDisplayWin) jsxToDisplay = <WinningScreen playAgain={playAgain} />;
  else
    jsxToDisplay = (
      <Playing
        playTurn={playTurn}
        bestScore={bestScore}
        setIsSetting={setIsSetting}
        currentScore={currentScore}
        currentPokemonList={currentPokemonList}
      />
    );
  return (
    <div id="wrapper" className="h-screen bg-slate-700 flex flex-col">
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
  const [isDisplayWin, _setIsDisplayWin] = useState(false);
  const [isDisplayLose, _setIsDisplayLose] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isDisplayAbout, setIsDisplayAbout] = useState(false);
  const preloadPokemonNumber = 48; // 48 FIXME
  const [preloadPokemonList, setPreloadPokemonList] = useState([]);
  const [currentDifficulty, setCurrentDifficulty] = useState(6); // 12, 24, 48
  const [currentPokemonList, _setCurrentPokemonList] = useState([]);
  const [_selectedIdList, _setSelectedIdList] = useState([]);
  const [bestScore, _setBestScore] = useState(0);
  const currentScore = _selectedIdList.length;
  const _randomPickInPreload = () => {
    const tmp = pickItems(preloadPokemonNumber, currentDifficulty).map(
      (number) => {
        console.log(number);
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
    const tmp = pickItems(preloadPokemonList.length, currentDifficulty).map(
      (number) => {
        const item = preloadPokemonList[number];
        return { ...item };
      },
    );
    _setCurrentPokemonList(tmp);
    return () => {
      console.log("change current difficult");
    };
  }, [currentDifficulty, preloadPokemonList]);
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
          bestScore={bestScore}
          currentScore={currentScore}
          playAgain={playAgain}
          playTurn={playTurn}
        />
      )}
    </>
  );
};

export default App;
