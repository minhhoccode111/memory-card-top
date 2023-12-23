/* eslint-disable react/prop-types */
import { useState } from "react";
import { Github } from "./Icons";
import ToggleButton from "./ToggleButton";
const Footer = ({
  isSoundOn,

  isMusicOn,

  playClick,

  setIsSetting,

  setIsSoundOn,

  setIsMusicOn,

  isPlayingVideo,

  setIsPlayingVideo,
}) => {
  const [isDisplayAbout, setIsDisplayAbout] = useState(true);
  return (
    <footer className="flex justify-between overflow-x-auto overflow-y-hidden fixed bottom-0 w-screen bg-lightFade">
      <div className="p-2 gap-2 sm:gap-4 sm:p-4 flex items-center">
        <ToggleButton
          text={"sound"}
          isOpen={isSoundOn}
          buttonOnClickCb={() => {
            playClick();
            setIsSoundOn(!isSoundOn);
          }}
        />
        <ToggleButton
          text={"music"}
          isOpen={isMusicOn}
          buttonOnClickCb={() => {
            playClick();
            setIsMusicOn(!isMusicOn);
          }}
        />
        <ToggleButton
          text={"video"}
          isOpen={isPlayingVideo}
          buttonOnClickCb={() => {
            playClick();
            setIsPlayingVideo(!isPlayingVideo);
          }}
        />
      </div>

      <div className="flex items-center gap-2 p-2 sm:gap-4 sm:p-4">
        <ToggleButton
          text={"about"}
          isOpen={isDisplayAbout}
          buttonOnClickCb={() => {
            playClick();
            setIsDisplayAbout(!isDisplayAbout);
          }}
        />
        <ToggleButton
          text={"setting"}
          buttonOnClickCb={() => {
            playClick();
            setIsSetting(true);
          }}
        />
        <div
          className={
            (isDisplayAbout ? "roll-in-bottom" : "roll-out-bottom") +
            " whitespace-nowrap text-center text-darker text-xs sm:text-sm md:text-base fixed right-2 bottom-16"
          }
        >
          <p className="px-3 mt-1 py-2 rounded-xl bg-light">
            Don&apos;t catch a Pokemon TWICE
          </p>
          <p className="px-3 mt-1 py-2 rounded-xl bg-light flex items-center justify-center gap-1 absolute bottom-full z-10">
            View{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/minhhoccode111/memory-card-top"
              className="underline underline-offset-2 hover:no-underline"
            >
              this project
            </a>{" "}
            on <Github />
          </p>
          <p className="px-3 mt-1 py-2 rounded-xl bg-light">
            Made with ❤️ by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/minhhoccode111"
              className="underline underline-offset-2 hover:no-underline"
            >
              minhhoccode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
