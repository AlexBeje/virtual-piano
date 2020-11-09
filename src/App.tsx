import React, { useState } from "react";

// Style
import "./App.scss";
import "./tailwind.output.scss";

// Icons
import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { IoIosPhoneLandscape } from "react-icons/io";

// Components
import Piano from "./components/piano/piano.component";

function App() {
  const [pianoKeys] = useState({
    white: ["C", "D", "E", "F", "G", "A", "B"],
    black: ["C-Sharp", "D-Sharp", "", "F-Sharp", "G-Sharp", "A-Sharp"],
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    e.currentTarget.value && audio.play();
  };

  return (
    <div className="app flex h-screen bg.primary">
      <div className="app__piano--portrait app__title p-5 m-auto text-center">
        <IoIosPhoneLandscape className="inline" /> your device or your device is
        to small.
      </div>
      <div className="app__piano--landscape m-auto text-center">
        <h1 className="app__title mb-10 hidden lg:block">VIRTUAL PIANO</h1>
        <Piano
          whitePianoKeys={pianoKeys.white}
          blackPianoKeys={pianoKeys.black}
          handleClick={handleClick}
        />
        <div className="flex justify-between mt-5">
          <div className="flex items-center">
            <a href="https://github.com/AlexBeje/virtual-piano">
              <AiFillGithub className="icon--hover mr-5" />
            </a>
            <a href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1lLwlLr8TfMnZtU2nYM4P1%2Fvirtual-piano%3Fnode-id%3D0%253A1">
              <FiFigma className="icon--hover" />
            </a>
          </div>
          <a href="https://www.alexbejenaru.dev">
            <div className="app__author flex items-center">
              <AiOutlineCopyrightCircle />
              Alexandru Bejenaru
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
