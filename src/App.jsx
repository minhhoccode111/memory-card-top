/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Data from "./components/Data";

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
const Gameboard = () => {
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
const Playing = () => {
  return (
    <>
      <Header />
      <Gameboard />
    </>
  );
};
const Footer = () => {
  return <footer className=""></footer>;
};
const MainPage = ({ isSetting, setIsSetting }) => {
  return (
    <div id="wrapper" className="h-screen bg-slate-700">
      {isSetting ? <Setting /> : <Playing />}
      <Footer />
    </div>
  );
};
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isDisplayAbout, setIsDisplayAbout] = useState(false);
  const [isSetting, setIsSetting] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(6);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <MainPage isSetting={isSetting} setIsSetting={setIsSetting} />
      )}
    </>
  );
};

export default App;
