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
const MainPage = () => {};
const Footer = () => {
  return;
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
    <div id="wrapper" className="h-screen">
      {isLoading ? <LoadingScreen /> : <MainPage />}
      <Footer />
    </div>
  );
};

export default App;
